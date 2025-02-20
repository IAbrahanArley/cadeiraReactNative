import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Exercicio1 = ({ nome }) => {
  return (
    <View style={styles.container}>
      <Text>ola {nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Exercicio1;
