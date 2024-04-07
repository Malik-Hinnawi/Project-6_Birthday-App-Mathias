import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import Image1 from "../../assets/Image1.png";

const TaylorSwiftScreen = () => {
    // Function to generate rainbow colors
    const generateRainbowColors = (numColors) => {
        const colors = [];
        const frequency = (6 * Math.PI) / numColors;
        for (let i = 0; i < numColors; i++) {
            const red = Math.sin(frequency * i + 0) * 127 + 128;
            const green = Math.sin(frequency * i + 2) * 127 + 128;
            const blue = Math.sin(frequency * i + 4) * 127 + 128;
            colors.push(`rgb(${red}, ${green}, ${blue})`);
        }
        return colors;
    };

    // Text with rainbow colors for each word
    const text = "it feels like a perfect night to dress up like hipsters and make fun of our exes";
    const words = text.split(" ");
    const rainbowColors = generateRainbowColors(words.length);
    const textWithRainbowColors = words.map((word, index) => (
        <Text key={index} style={[styles.word, { color: rainbowColors && rainbowColors[index] }]}>
            {word}
        </Text>
    ));

    return (
        <ImageBackground source={Image1} style={styles.imageBackground}>
            <View style={styles.overlay}>
                <View style={styles.dialogueBox}>
                    <Text style={styles.message}>Taylor Swift says:</Text>
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
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        fontWeight: "bold",
        marginBottom: 10,
        alignSelf: "center"
    },
    lyricsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    },
    word: {
        textAlign: "center",
        marginRight: 5 // Adjust spacing between words if needed
    }
});

export default TaylorSwiftScreen;
