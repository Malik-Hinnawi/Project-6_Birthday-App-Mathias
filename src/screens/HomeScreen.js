import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import Modal from 'react-native-modal';
import bg3 from "../../assets/bg3.png";
import { LogBox } from 'react-native';


const HomeScreen = ({navigation}) => {  
    LogBox.ignoreAllLogs();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={bg3}>
                <Text style={styles.textStyle}>Mathias Birthday App</Text>

                <View style={styles.gridContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("TaylorSwift")} style={styles.squareContainer}>
                        <Image source={require("../../assets/Image1.png")} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("TroyeSivan")} style={styles.squareContainer}>
                        <Image source={require("../../assets/Image3.png")} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("LanaDelRay")} style={styles.squareContainer}>
                        <Image source={require("../../assets/Image3.jpg")} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("LilNasX")} style={styles.squareContainer}>
                        <Image source={require("../../assets/Image4.png")} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={toggleModal}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.textStyle3}>BDAY WISH FROM MOII :)</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>

            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>HAPPYY BDAYY JOUYEAUX ANNIVERSAIRE AND HAPPY SWEET 21!!</Text>
                    <Text style={[styles.modalText, { color: 'gold' }]}>1 more year and you can officially play 22 by Taylor Swift</Text>
                </View>
            </Modal>
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
        width: 350,
        height: 350,
        alignSelf: "center"
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
        borderRadius: 15
    },
    buttonContainer: {
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        zIndex: 1,
    },
    buttonStyle:{
        width: 150,
        height: 50,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 10, // To make it round
        justifyContent: "center"
    },
    textStyle3:{
        alignSelf: "center",
        textAlign: "center",
        fontWeight: "bold"
    },
    modalContainer: {
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default HomeScreen;
