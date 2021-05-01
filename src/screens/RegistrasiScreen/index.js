import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default RegistrasiScreen = ({navigation}) => {
    const usersCollection = firestore().collection('merchants');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [merchantName, setMerchantName] = useState("");

    const submitRegistrasi = () => {
      firestore()
      .collection('merchants')
      .add({
        merchantName: merchantName,
        phoneNumber: phoneNumber,
      })
      .then(() => {
        console.log('User added!');
      });
    }

    return (
      <View style={{ flex: 1, marginHorizontal: 8, backgroundColor: "#FFFFFF" }}>
        <TextInput
          placeholder="Phone Number"
          style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
          onChangeText={text => setPhoneNumber(text)}
          defaultValue={phoneNumber}
        />
        <TextInput
          placeholder="Merchant Name"
          style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
          onChangeText={text => setMerchantName(text)}
          defaultValue={merchantName}
        />
        <Button
        title="Submit"
        onPress={() => {
          submitRegistrasi()
        }}
        />
      </View>
    )
  }