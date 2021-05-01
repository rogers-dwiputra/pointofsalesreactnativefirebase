import React, { useState } from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

export default Splashscreen = ({navigation}) => {
    const [isRequest2FA, setIsRequest2FA] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#0000ff" />
      </View>
    )
  }