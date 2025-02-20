import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";
const Exercicio3 = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 200 }}
        label="Nome"
        onChangeText={setText}
        value={text}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default Exercicio3;

const styles = StyleSheet.create({});
