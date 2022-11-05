import { Center, Image, ScrollView, Text, VStack } from 'native-base';
import React from 'react';

import BGImage from '@assets/background.png';
import LogoSvg from '@assets/logo-secondary.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const navigation = useNavigation();

  function handleNaivgationGoBack() {
    navigation.goBack();
  }
  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <VStack flex={1} px={10}>
          <Image
            source={BGImage}
            defaultSource={BGImage}
            alt="Pessoas Treinando"
            resizeMode="contain"
            position="absolute"
          />
          <Center mt="24">
            <LogoSvg />
            <Text color="gray.100" fontSize="sm">
              Treine sua mente e o seu corpo
            </Text>
          </Center>
          <Center flex={1}>
            <Text color="gray.100" fontFamily="igHeading" fontSize="2xl" mb={4}>
              Crie sua conta
            </Text>

            <Input placeholder="E-mail" keyboardType="default" />
            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confiramr a Senha" secureTextEntry />
            <Button title="Criar e acessar" />
          </Center>
          <Center pb="8">
            <Button title="Voltar para o login" variant="outline" mt={12} onPress={() => handleNaivgationGoBack()} />
          </Center>
        </VStack>
      </ScrollView>
    </>
  );
}
