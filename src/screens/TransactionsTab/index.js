import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';

export default TransactionsTab = () => {
    const renderItem = ({item}) => {
      return (
        <View style={{ padding: 8, backgroundColor: "#FFFFFF", marginBottom: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.transactionID}</Text>
          <Text>{item.transactionTime}</Text>
          <Text>Rp. {item.transactionTotal}</Text>
        </View>
      )
    }
  
    return (
      <View style={{ flex: 1, marginHorizontal: 8, paddingTop: 8 }}>
        <FlatList
          data={[
            {key: '1', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '2', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '3', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '4', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '5', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '6', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '7', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '8', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '9', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'},
            {key: '10', transactionID: '#123456', transactionTime: '24 April 2021 10:30', transactionTotal: '20000'}
          ]}
          renderItem={renderItem}
        />
      </View>
    )
  }