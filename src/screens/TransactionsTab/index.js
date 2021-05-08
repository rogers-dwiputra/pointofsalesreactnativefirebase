import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default TransactionsTab = () => {
    const [orders, setOrders] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
      console.log('useEffect')
      getOrders();
    }, []);

    const getOrders = async () => {
      const orders = [];
      const ordersFirestore = await firestore().collection('orders').orderBy('orderTime', 'desc').get();
      ordersFirestore.forEach(document => {
        console.log(document.data())
        orders.push({
          ...document.data(),
          key: document.id,
        });
      })
      setOrders(orders);
      // console.log(orders);
    }

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

    const onRefresh = () => {
      setIsRefresh(true)
      getOrders();
      setIsRefresh(false)
    }
  
    return (
      <View style={{ flex: 1, marginHorizontal: 8, paddingTop: 8 }}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          onRefresh={() => { onRefresh() }}
          refreshing={isRefresh}
        />
      </View>
    )
  }