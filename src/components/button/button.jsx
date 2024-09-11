import {Text, TouchableOpacity} from "react-native";
import {styled} from "./button.style.js";

function Button(props) {
  return (
    <TouchableOpacity style={styled.btn} onPress={props.onPress}>
      <Text style={styled.textos}>{props.texto}</Text>
    </TouchableOpacity>
  );
}

export default Button;
