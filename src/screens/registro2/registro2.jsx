import {useState} from "react";
import {ScrollView, View} from "react-native";
import Button from "../../components/button/button.jsx";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import {styled} from "./registro2.style.js";

function Registro2() {
  const [endereco, setEndereco] = useState();
  const [compl, setCompl] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [uf, setUf] = useState();
  const [cep, setCep] = useState();

  return (
    <ScrollView>
      <View style={styled.container}>
        <Header texto="Continue seu endereço." />
        <View style={styled.formGroup}>
          <View style={styled.formHorizontal}>
            <View style={styled.form70}>
              <TextBox
                label="Informe seu endereço."
                onChangeText={(texto) => setEndereco(texto)}
                value={endereco}
              />
            </View>
            <View style={styled.form30}>
              <TextBox
                label="Compl."
                onChangeText={(texto) => setCompl(texto)}
                value={compl}
              />
            </View>
          </View>
          <View style={styled.form}>
            <TextBox
              label="Bairro"
              onChangeText={(texto) => setBairro(texto)}
              value={bairro}
            />
          </View>
          <View style={styled.formHorizontal}>
            <View style={styled.form70}>
              <TextBox
                label="Cidade"
                onChangeText={(texto) => setCidade(texto)}
                value={cidade}
              />
            </View>
            <View style={styled.form30}>
              <TextBox
                label="UF"
                onChangeText={(texto) => setUf(texto)}
                value={uf}
              />
            </View>
          </View>
          <View style={styled.form}>
            <TextBox
              label="CEP"
              onChangeText={(texto) => setCep(texto)}
              value={cep}
            />
          </View>
          <View style={styled.form}>
            <Button texto="Criar minha conta" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Registro2;
