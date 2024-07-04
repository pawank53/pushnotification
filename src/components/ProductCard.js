import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { notificationService } from "../services/NotificationService";

const ProductCart = () => {

    // const buttonHandler=()=>{
    //     const options = {
    //         soundName: 'default',
    //         playSound: true,
    //         channelId: "default-channel-id", // Ensure that this matches the channelId created earlier
    //       };
    //       notificationService.showNotification(
    //         2, // Unique ID for the notification
    //         'Custom Notification',
    //         'This is a custom in-app notification!',
    //         {
    //             "notification":{
    //                 "title":"custom title",
    //                 "body":"Custom Body"
    //             }
    //         }, // Additional data if needed
    //         options
    //       );
    // }
    const buttonHandler=()=>{
        console.log("cliccled");
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://m.media-amazon.com/images/I/61JrXFCmS1L.SS700.jpg' }}
            />
            <View style={styles.productDetails}>
                <Text>Women O-Neck Half Sleeve Long Dress</Text>
                <Text>₹ 2,359</Text>
            </View>
            <TouchableOpacity style={styles.productAdd} onPress={buttonHandler}>
                <Text>Add to cart</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        height: 250,
        width: '100%',
        resizeMode: 'contain'
    },
    productDetails:{
        justifyContent:'center',
        alignItems:'center'
    },
    productAdd:{
        borderWidth:1,
        backgroundColor:'green',
        // justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:100
    }
})
export default ProductCart;