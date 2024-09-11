import {Text, TextInput} from "react-native";
import {styled} from "./textbox.style.js";

function TextBox(props) {
  return (
    <>
      {props.label && <Text style={styled.label}>{props.label}</Text>}
      <TextInput
        style={styled.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={(texto) => props.onChangeText(texto)}
        value={props.value}
      />
    </>
  );
}

export default TextBox;
