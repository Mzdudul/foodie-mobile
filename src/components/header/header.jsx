import { Image, Text, View } from 'react-native'
import { styled } from "../header/header.style.js";
import icons from '../../constantes/icons.js'

function Header(props){
    return(
         <View style={styled.header}>
        <Image style={styled.logo} source={icons.logo} />
        <Text style={styled.titulo}>{props.texto} </Text>
    </View>
)}

export default Header;