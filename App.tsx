import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
  useFonts,
} from '@expo-google-fonts/josefin-sans';

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import { Loading } from '@components/Loading';
import { MainRoutes } from '@routes/MainRoutes';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_700Bold,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {fontsLoaded ? <MainRoutes /> : <Loading />}
    </NativeBaseProvider>
  );
}
