import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default SettingsTab = ({navigation}) => {
    const usersCollection = firestore().collection('merchants');
    const [merchantName, setMerchantName] = useState("");

    useEffect(() => {
      const user = auth().currentUser;
      console.log(user.phoneNumber);

      const userDocument = firestore()
      .collection('merchants')
      .where('phoneNumber', '==', user.phoneNumber)
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
    
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().merchantName);
          setMerchantName(documentSnapshot.data().merchantName);
        });
      });
    }, []);

    return (
      <View style={{ flex: 1, marginHorizontal: 8, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', marginBottom: 8 }}>{merchantName}</Text>
        <Button
        title="Logout"
        onPress={() => {
          auth()
          .signOut()
          .then(() => console.log('User signed out!'));
        }}
        />
      </View>
    )
  }