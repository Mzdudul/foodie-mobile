import {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Button from "../../components/button/button.jsx";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import {styled} from "./login.style.js";

function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function ProcessarLogin() {
    console.log(email, senha);
  }

  return (
    <View style={styled.container}>
      <Header texto="Acesse sua conta." />
      <View style={styled.formGroup}>
        <View style={styled.form}>
          <TextBox
            label="E-mail"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />
        </View>

        <View style={styled.form}>
          <TextBox
            label="Senha"
            isPassword
            onChangeText={(texto) => setSenha(texto)}
            value={senha}
          />
        </View>
        <View style={styled.form}>
          <Button texto="Acessar" onPress={ProcessarLogin} />
        </View>
      </View>

      <View style={styled.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
          <Text style={styled.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
