import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCart from "../components/ProductCard";

const Product = () => {

    const cartHandler=()=>{
        console.log("pressed")
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Redux App</Text>
                <TouchableOpacity style={styles.counterView} onPress={cartHandler}>
                    <Icon name="shopping-cart" size={30} color="#900" />
                    <Text style={styles.counter}>count</Text>
                </TouchableOpacity>
            </View>
            <ProductCart/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2e7e6',
        height: '100%'
    },
    header: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    counterView: {
        borderWidth: 0.5,
        borderColor: 'red',
        borderRadius:10,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: '#aae7e6',
        width:'25%'
    },
    counter:{
        fontWeight:'800'
    }
})
export default Product;