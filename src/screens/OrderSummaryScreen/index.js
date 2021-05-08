import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default OrderSummaryScreen = ({ route, navigation }) => {
    const { data } = route.params;
    const [qty, setQty] = useState('')
    const [payment, setPayment] = useState('')
    const [merchantPhoneNumber, setMerchantPhoneNumber] = useState('')

    useEffect(() => {
        const merchant = auth().currentUser;
        setMerchantPhoneNumber(merchant.phoneNumber)
    });

    const submitOrder = () => {
        const orderId = getRandomInt(99999999)
        const orderTime = firestore.FieldValue.serverTimestamp()
        
        firestore()
        .collection('orders')
        .doc(orderId.toString())
        .set({
            phoneNumber: merchantPhoneNumber,
            orderTotal: qty * data.menuPrice,
            orderTime : orderTime,
            orderPayment : payment,
            orderChange: payment - (data.menuPrice * qty),
        })
        .then((collection) => {
            navigation.navigate('OrderFinish', {
                    orderId: orderId,
                    phoneNumber: merchantPhoneNumber,
                    orderTotal: qty * data.menuPrice,
                    orderPayment : payment,
                    orderChange: payment - (data.menuPrice * qty),
                    menuName: data.menuName,
                    menuPrice: data.menuPrice,
                    qty: qty
                }
            );
        });
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#CDEEFF" }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2, padding: 8, backgroundColor: "#FFFFFF", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <Text style={{ fontSize: 24, marginBottom: 8, marginTop: 8 }}>{ data.menuName } Rp. { data.menuPrice }</Text>
                <TextInput
                placeholder="Qty"
                style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
                onChangeText={text => setQty(text)}
                defaultValue={qty}
                />
                <Text style={{ fontSize: 24, marginBottom: 8, marginTop: 8 }}>Total Rp. { data.menuPrice * qty }</Text>
                <TextInput
                placeholder="Payment"
                style={{ marginBottom: 8, borderBottomColor: '#000000', borderBottomWidth: 1 }}
                onChangeText={text => setPayment(text)}
                defaultValue={payment}
                />
                <View style={{ marginTop: 8 }}>
                    <Button
                    title="Submit"
                    onPress={() => {
                        submitOrder()
                    }}
                    />
                </View>
            </View>
        </View>
    );
}