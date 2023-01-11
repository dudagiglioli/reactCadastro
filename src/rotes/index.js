import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../pages/cadastro";
import Lista from "../pages/lista";
import React from "react";

const Stack = createNativeStackNavigator();

// navegação de paginas
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Lista" component={Lista} />
    </Stack.Navigator>
  );
}
