import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default LoginScreen = ({navigation}) => {
    const [isRequest2FA, setIsRequest2FA] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
  
    return (
      <View style={{ flex: 1, marginHorizontal: 8, backgroundColor: "#FFFFFF" }}>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={{ marginBottom: 8, fontSize: 24 }}>Point of Sales App</Text>
        </View>
        <View style={{ flex: 1 }}>
          {
            isRequest2FA == false ? (
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
                setIsRequest2FA(true)
              }}
              />
              </>
            ) : (
              <>
              <Text>2FA Code Has Been Sent to No {phoneNumber}</Text>
              <TextInput
                placeholder="2FA Code"
                style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
              />
              <Button
              title="Submit"
              onPress={() => {
                setIsRequest2FA(false)
                navigation.navigate("MainTab")
              }}
              />
              <View style={{ marginTop: 8 }}>
                <Button
                title="Request Another Code"
                onPress={() => {
                  setIsRequest2FA(false)
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