import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default LoginScreen = ({navigation}) => {
    const [confirm, setConfirm] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
      console.log(phoneNumber);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }

    async function confirmCode() {
      try {
        await confirm.confirm(code);
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  
    return (
      <View style={{ flex: 1, marginHorizontal: 8, backgroundColor: "#FFFFFF" }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={{ marginBottom: 8, fontSize: 24 }}>Point of Sales App</Text>
        </View>
        <View style={{ flex: 1 }}>
          {
            confirm == false ? (
              <>
              <TextInput
                placeholder="Phone Number"
                onChangeText={text => setPhoneNumber(text)}
                defaultValue={phoneNumber}
                style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
              />
              <Button
              title="Request 2FA Code"
              onPress={() => {
                signInWithPhoneNumber(phoneNumber)
              }}
              />
              </>
            ) : (
              <>
              <Text>2FA Code Has Been Sent to No {phoneNumber}</Text>
              <TextInput
                placeholder="2FA Code"
                style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
                onChangeText={text => setCode(text)}
                defaultValue={code}
              />
              <Button
              title="Submit"
              onPress={() => {
                confirmCode();
              }}
              />
              <View style={{ marginTop: 8 }}>
                <Button
                title="Request Another Code"
                onPress={() => {
                  setConfirm(false)
                }}
                />
              </View>
              </>
            )}
          
          <TouchableOpacity onPress={() => { navigation.navigate("Registrasi") }} style={{ marginTop: 8 }}>
              <Text style={{ textAlign: 'center' }}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
  
        </View>
      </View>
    )
  }