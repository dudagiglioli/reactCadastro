import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./style";
import { navegar } from "./functions";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [idad, setIdad] = useState("");
  const [cpf, setCpf] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>LOGIN</Text>

        <Icon style={styles.icon} name="user" size={50} color="#4682B4" />

        <Text style={styles.texto}>NOME</Text>
        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          style={styles.input}
          keyboardType={"string"}
          maxLength={50}
        />

        <Text style={styles.texto}>IDADE</Text>

        <TextInput
          value={idad}
          onChangeText={(text) => {
            setIdad(text);
          }}
          style={styles.input}
          keyboardType={"numeric"}
          maxLength={2}
        />

        <Text style={styles.texto}>CPF</Text>

        <TextInput
          value={cpf}
          onChangeText={(text) => {
            setCpf(text);
          }}
          style={styles.input}
          keyboardType={"numeric"}
          placeholder="xxx.xxx.xxx-XX"
          placeholderTextColor="#8b9cb5"
          maxLength={14}
        />

        <TouchableOpacity
          style={styles.botao2}
          onPress={() => navegar(navigation, name, idad, cpf)}
        >
          <Text style={styles.texto2}>CADASTRAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
