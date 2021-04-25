import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default OrderSummaryScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#CDEEFF" }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2, padding: 8, backgroundColor: "#FFFFFF", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <Text style={{ fontSize: 24, marginBottom: 8, marginTop: 8 }}>Nasi Goreng Telur Rp. 20000</Text>
                <TextInput
                placeholder="Qty"
                style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Text style={{ fontSize: 24, marginBottom: 8, marginTop: 8 }}>Total Rp. 40000</Text>
                <TextInput
                placeholder="Payment"
                style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <View style={{ marginTop: 8 }}>
                    <Button
                    title="Submit"
                    onPress={() => {
                        navigation.navigate("OrderFinish")
                    }}
                    />
                </View>
            </View>
        </View>
    );
}