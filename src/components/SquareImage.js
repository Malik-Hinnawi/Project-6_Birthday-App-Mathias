import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import bg3 from "../../assets/bg3.png";

const HomeScreen = () => {    
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={bg3}>
                <Text style={styles.textStyle}>Mathias Birthday App</Text>

            </ImageBackground>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textStyle: {
        textAlign: "center",
        color: "#FFF",
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 60,
        fontSize: 25,
        fontFamily: "Bradley Hand",
        width: "70%"
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    squareContainer: {
        width: '45%',
        aspectRatio: 1,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});

export default HomeScreen;
