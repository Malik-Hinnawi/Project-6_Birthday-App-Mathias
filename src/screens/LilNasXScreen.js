import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import Image3 from "../../assets/Image4.png";

const LilNasXScreen = () => {
    // Text
    const text = "Come on and hold me down, falling down, falling down";

    // Text split into words
    const words = text.split(" ");

    // Text rendered with rainbow colors
    const textWithRainbowColors = words.map((word, index) => (
        <Text key={index} style={styles.word}>
            {word}{" "}
        </Text>
    ));

    return (
        <ImageBackground source={Image3} style={styles.imageBackground}>
            <View style={styles.overlay}>
                <View style={styles.dialogueBox}>
                    <View style={styles.lyricsContainer}>{textWithRainbowColors}</View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    dialogueBox: {
        backgroundColor: "rgba(255,255,255,0)", // Static background color for the dialogue box
        padding: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        top: 210,
        left: 50
    },
    lyricsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: 150
    },
    word: {
        textAlign: "center",
        marginRight: 5, // Adjust spacing between words if needed
        color: "#FFF"
    }
});

export default LilNasXScreen;
