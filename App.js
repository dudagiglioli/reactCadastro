import React from "react";
import Cadastro from "./src/pages/cadastro";
import Lista from "./src/pages/lista";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/rotes";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation></StackNavigation>
    </NavigationContainer>
  );
}
