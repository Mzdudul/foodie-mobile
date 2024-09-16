import {useState} from "react";
import {Image, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Categorias from "../../components/categorias/categorias.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import icons from "../../constantes/icons";
import {styled} from "./home.style";
function Home() {
  const [busca, setBusca] = useState();
  return (
    <SafeAreaView style={styled.container}>
      <View style={styled.headerBar}>
        <Image source={icons.logo} style={styled.logo} />
        <Image source={icons.cart} style={styled.cart} />
      </View>
      <View style={styled.busca}>
        <TextBox
          placeholder="O que vamos pedir hoje?"
          onChangeText={(texto) => setBusca(texto)}
          value={busca}
        />
      </View>
      <Categorias />
    </SafeAreaView>
  );
}

export default Home;
