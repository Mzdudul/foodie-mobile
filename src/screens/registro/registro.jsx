import {useState} from "react";
import {ScrollView, View} from "react-native";
import Button from "../../components/button/button.jsx";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import {styled} from "./registro.style.js";

function Registro(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");

  return (
    <ScrollView>
      <View style={styled.container}>
        <Header texto="Criar sua conta." />
        <View style={styled.formGroup}>
          <View style={styled.form}>
            <TextBox
              label="Nome Completo"
              onChangeText={(texto) => setNome(texto)}
              value={nome}
            />
          </View>
          <View style={styled.form}>
            <TextBox
              label="E-mail"
              onChangeText={(texto) => setEmail(texto)}
              value={email}
            />
          </View>

          <View style={styled.form}>
            <TextBox
              label="Escolha uma senha"
              isPassword
              onChangeText={(texto) => setSenha1(texto)}
              value={senha1}
            />
          </View>
          <View style={styled.form}>
            <TextBox
              label="Confirme sua senha"
              isPassword
              onChangeText={(texto) => setSenha2(texto)}
              value={senha2}
            />
          </View>
          <View style={styled.form}>
            <Button
              texto="Próximo passo"
              onPress={() => props.navigation.navigate("registro2")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Registro;
