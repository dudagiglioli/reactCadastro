import React from "react";
import styles from "./style";
import { View, Text, Image } from "react-native";

export default function Lista() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View style={styles.text}>
        <Text style={styles.text}>Maria Eduarda Giglioli</Text>
        <Text>17</Text>
        <Text>515472668-56</Text>
      </View>
    </View>
  );
}
