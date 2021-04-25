import React, { useState } from 'react';
import {
  View,
  Button,
  TextInput,
} from 'react-native';

export default RegistrasiScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, marginHorizontal: 8, backgroundColor: "#FFFFFF" }}>
        <TextInput
          placeholder="Phone Number"
          style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
        />
        <TextInput
          placeholder="Merchant Name"
          style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
        />
        <Button
        title="Submit"
        onPress={() => {
          navigation.navigate("Login")
        }}
        />
      </View>
    )
  }