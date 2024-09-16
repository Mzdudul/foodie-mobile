import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./screens/home/home";
import Login from "./screens/login/Login";
import Registro from "./screens/registro/registro";
import Registro2 from "./screens/registro2/registro2";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="registro2"
          component={Registro2}
          options={{
            headerShownVisible: false,
            title: "",
            headerBlackTitle: "Voltar",
          }}
        />

        <Stack.Screen
          name="registro"
          component={Registro}
          options={{
            headerShownVisible: false,
            title: "",
            headerBlackTitle: "Voltar",
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
