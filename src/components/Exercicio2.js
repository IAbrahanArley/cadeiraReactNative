import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const Exercicio2 = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button title="Adicionar" onPress={increment} />
        <Button title="Remover" onPress={decrement} />
      </View>
    </View>
  );
};

export default Exercicio2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
