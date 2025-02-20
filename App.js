import { View, Text } from "react-native";
import React from "react";
import Exercicio1 from "./src/components/Exercicio1";
import Exercicio2 from "./src/components/Exercicio2";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Exercicio1 nome="Mundo" />
      <Exercicio2 />
    </View>
  );
};

export default App;
