import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default OrderFinishScreen = ({ route, navigation }) => {
    const { orderId, orderTotal, orderPayment, orderChange, menuName, menuPrice, qty } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: "#CDEEFF" }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, marginBottom: 8 }}>Order Complete!</Text>
            </View>
            <View style={{ flex: 2, padding: 8, backgroundColor: "#FFFFFF", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <Text style={{ textAlign: 'center', marginBottom: 8 }}>#{orderId}</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>{menuName} x {qty}</Text>
                        <Text>@ Rp. {menuPrice}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. {orderTotal}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>Total</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. {orderTotal}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>Payment</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. {orderPayment}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text>Change</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right' }}>Rp. {orderChange}</Text>
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