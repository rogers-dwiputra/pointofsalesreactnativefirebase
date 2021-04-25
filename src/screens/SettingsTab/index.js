import React, { useState } from 'react';
import {
  View,
  Button,
} from 'react-native';

export default SettingsTab = ({navigation}) => {
    return (
      <View style={{ flex: 1, marginHorizontal: 8, justifyContent: 'center' }}>
        <Button
        title="Logout"
        onPress={() => {
          navigation.navigate("Login")
        }}
        />
      </View>
    )
  }