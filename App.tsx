import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { LinearGradient } from 'expo-linear-gradient'

import { Routes } from "./src/routes";

//import { AuthContextProvider } from "@contexts/AuthContext";

import { THEME } from "./src/theme";
import { Loading } from "@components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  }
  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
