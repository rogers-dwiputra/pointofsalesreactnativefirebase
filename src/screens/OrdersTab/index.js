import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default OrdersTab = ({navigation}) => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity 
        style={{ padding: 8, backgroundColor: "#FFFFFF", marginBottom: 8 }}
        onPress={() => {
            navigation.navigate("OrderSummary")
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
          data={[
            {key: '1', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '2', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '3', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '4', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '5', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '6', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '7', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '8', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '9', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
            {key: '10', menuName: 'Nasi Goreng Telur', menuPrice: '20000'},
          ]}
          renderItem={renderItem}
        />
      </View>
    )
  }