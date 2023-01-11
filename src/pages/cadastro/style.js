import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  title: {
    color: "black",
    margin: 15,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 25,
    marginTop: 25,
    marginBottom: 35,
    fontFamily: "fantasy",
  },

  texto: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 0,
  },

  input: {
    backgroundColor: "white",
    margin: 10,
    padding: 5,
    borderRadius: 10,
    color: "black",
    borderWidth: 1,
    height: 28,
    marginBottom: 11,
  },

  botao2: {
    backgroundColor: "#6495ED",
    color: "white",
    borderRadius: 25,
    padding: 4,
    borderWidth: 1,
    height: 40,
    margin: 12,
    marginTop: 25,
  },

  texto2: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    fontFamily: "fantasy",
    margin: 5,
  },

  scrollView: {
    backgroundColor: "#F0F8FF",
  },
});

export default styles;
