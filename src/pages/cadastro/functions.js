import { useNavigation } from "@react-navigation/native";

//enviando parametros para a lista
export function navegar(navigation, nome, idade, cpf) {
  navigation.navigate("Lista", {
    nome: nome,
    idade: idade,
    cpf: cpf,
  });
}
