import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default OrderFinishScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#CDEEFF" }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, marginBottom: 8 }}>Order Complete!</Text>
            </View>
            <View style={{ flex: 2, padding: 8, backgroundColor: "#FFFFFF", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <Text style={{ textAlign: 'center', marginBottom: 8 }}>#12345678 24 April 2021 10:00</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>Nasi Goreng Telur x 2</Text>
                        <Text>@ Rp. 20000</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. 40000</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>Total</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. 40000</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>Payment</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. 50000</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>Change</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. 10000</Text>
                    </View>
                </View>
                <View>
                    <Button
                    title="Finish"
                    onPress={() => {
                        navigation.navigate("MainTab")
                    }}
                    />
                </View>
            </View>
        </View>
    );
}