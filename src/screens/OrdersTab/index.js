import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default OrdersTab = ({navigation}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const subscriber = firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProducts(users);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
    }, []);

    const renderItem = ({item}) => {
      return (
        <TouchableOpacity 
        style={{ padding: 8, backgroundColor: "#FFFFFF", marginBottom: 8 }}
        onPress={() => {
            navigation.navigate("OrderSummary", {
              data: item
            })
        }}
        >
          <Text style={{ fontWeight: 'bold' }}>{item.menuName}</Text>
          <Text>Rp. {item.menuPrice}</Text>
        </TouchableOpacity>
      )
    }
  
    return (
      <View style={{ flex: 1, marginHorizontal: 8, paddingTop: 8 }}>
        <FlatList
          data={products}
          renderItem={renderItem}
        />
      </View>
    )
  }