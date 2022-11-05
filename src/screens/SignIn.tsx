import { Center, Image, ScrollView, Text, VStack } from 'native-base';
import React from 'react';

import BGImage from '@assets/background.png';
import LogoSvg from '@assets/logo-secondary.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutesNavigationProps } from '@routes/AuthRoutes';

export function SignIn() {
  const navigation = useNavigation<AuthRoutesNavigationProps>();

  function handleNaivgationToSignUp() {
    navigation.navigate('SignUp');
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
              Acesse sua conta
            </Text>

            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Acessar" />
          </Center>

          <Center pb="8">
            <Text color="gray.100" fontSize="sm" textAlign="center" fontFamily="body" mb={3}>
              Ainda não tem acesso
            </Text>
            <Button title="Criar conta" variant="outline" onPress={() => handleNaivgationToSignUp()} />
          </Center>
        </VStack>
      </ScrollView>
    </>
  );
}
