import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default TransactionsTab = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const subscriber = firestore()
      .collection('orders')
      .onSnapshot(querySnapshot => {
        const orders = [];

        querySnapshot.forEach(documentSnapshot => {
          orders.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setOrders(orders);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
    }, []);

    const renderItem = ({item}) => {
      // console.log(item.key+' '+item.orderTime.toDate().toDateString())
      return (
        <View style={{ padding: 8, backgroundColor: "#FFFFFF", marginBottom: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.key}</Text>
          <Text>{ item.orderTime.toDate().toDateString() } { item.orderTime.toDate().toLocaleTimeString('en-US') }</Text>
          <Text>Rp. {item.orderTotal}</Text>
        </View>
      )
    }
  
    return (
      <View style={{ flex: 1, marginHorizontal: 8, paddingTop: 8 }}>
        <FlatList
          data={orders}
          renderItem={renderItem}
        />
      </View>
    )
  }