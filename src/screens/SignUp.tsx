import { Center, Image, ScrollView, Text, useToast, VStack } from 'native-base';
import React, { useEffect } from 'react';

import BGImage from '@assets/background.png';
import LogoSvg from '@assets/logo-secondary.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller, FieldError } from 'react-hook-form';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from 'react-native';

interface SignUpUserProps {
  email: string;
  password: string;
  name: string;
  password_confirm: string;
  password_confirm_password?: {
    message: string;
  };
}

// const signUpSchema = yup.object({
//   name: yup.string().required('Informe o nome.'),
//   email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
//   password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
//   password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'A confirmação da senha não confere')
// });

const schema = z
  .object({
    name: z.string({ required_error: 'Name required' }),
    email: z.string({ required_error: 'Email required' }).email({ message: 'Email invalid' }),
    password: z
      .string({ required_error: 'Password required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
    password_confirm: z
      .string({ required_error: 'Confirm password required' })
      .max(8, { message: 'Password must be at least 8 characters' }),
  })
  .required()
  .refine(data => data.password === data.password_confirm, {
    message: "Passwords  don't match",
    path: ['password_confirm_password'],
  });

export function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUserProps>({ resolver: zodResolver(schema) });

  function handleNaivgationGoBack() {
    navigation.goBack();
  }

  function handleSignUp(data: z.infer<typeof schema>) {
    Alert.alert(JSON.stringify(data));
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
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Name"
                  keyboardType="default"
                  value={value}
                  onChangeText={onChange}
                  error={errors.name && errors.name.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Email"
                  keyboardType="default"
                  value={value}
                  onChangeText={onChange}
                  error={errors.email && errors.email.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Password"
                  keyboardType="none"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  error={errors.password && errors.password.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar senha"
                  keyboardType="none"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  error={
                    (errors.password_confirm && errors.password_confirm.message) ||
                    (errors.password_confirm_password?.message && (errors.password_confirm_password.message as string))
                  }
                />
              )}
            />

            <Button title="Criar e acessar" onPress={handleSubmit(handleSignUp)} />
          </Center>
          <Center pb="8">
            <Button title="Voltar para o login" variant="outline" mt={12} onPress={() => handleNaivgationGoBack()} />
          </Center>
        </VStack>
      </ScrollView>
    </>
  );
}
