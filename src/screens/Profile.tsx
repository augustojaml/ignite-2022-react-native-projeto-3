import React, { useState } from 'react';

import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Alert, AlertStatic, TouchableOpacity } from 'react-native';

import { Box, Center, ScrollView, Skeleton, Text, useToast, VStack } from 'native-base';

import HappySvg from '@assets/ico-happy.svg';
import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { HeaderDefault } from '@components/HeaderDefault';
import { Input } from '@components/Input';

const PHOTO_SIZE = 32;

const IMAGES_PROP: ImagePicker.ImagePickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  quality: 1,
  aspect: [4, 4],
  allowsEditing: true,
};

export function Profile() {
  const toast = useToast();

  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
  const [avatar, setAvatar] = useState('');

  async function handleuserPhotoSelect(): Promise<void | AlertStatic> {
    try {
      setIsLoadingAvatar(true);
      const ImagePickerResult = await ImagePicker.launchImageLibraryAsync(IMAGES_PROP);
      if (ImagePickerResult.cancelled || !ImagePickerResult.uri) {
        return;
      }

      const photoInfo = await FileSystem.getInfoAsync(ImagePickerResult.uri);

      if (!photoInfo.size) {
        return;
      }

      const photoInMB = photoInfo.size / 1024 / 1024;

      if (photoInMB > 5) {
        toast.show({
          title: 'Essa image é maior que 5MB permitido',
          placement: 'top',
          bgColor: 'red.400',
        });
        return;
      }

      setAvatar(ImagePickerResult.uri);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error);
      toast.show({
        title: `Error ${error.message}`,
        placement: 'top',
        bgColor: 'red.400',
      });
    } finally {
      setIsLoadingAvatar(false);
    }
  }

  return (
    <>
      <VStack flex={1}>
        <HeaderDefault title="Profile" />
        <ScrollView>
          <Center px={10} mt="12">
            {isLoadingAvatar ? (
              <Skeleton w={PHOTO_SIZE} h={PHOTO_SIZE} rounded="full" startColor="gray.500" endColor="gray.500" />
            ) : (
              <>
                {avatar ? (
                  <Avatar source={{ uri: avatar }} size={PHOTO_SIZE} alt="Profile" />
                ) : (
                  <Box bg="gray.400" size={PHOTO_SIZE} rounded="full" justifyContent="center" alignItems="center">
                    <HappySvg width="100%" height="100%" />
                  </Box>
                )}
              </>
            )}
            <TouchableOpacity onPress={() => handleuserPhotoSelect()}>
              <Text color="green.500" fontFamily="heading" fontSize="md" mt={2} mb={8}>
                Alterar photo
              </Text>
            </TouchableOpacity>
            <Input placeholder="Seu nome" bg="gray.600" />
            <Input placeholder="Seu e-mail" bg="gray.600" value="augusto@gmail.com" isDisabled />

            <Text color="gray.200" fontFamily="heading" fontSize="md" mt={12} mb={2} alignSelf="flex-start">
              Alterar photo
            </Text>
            <Input placeholder="Sua senha antiga" bg="gray.600" secureTextEntry />
            <Input placeholder="Sua nova senha" bg="gray.600" secureTextEntry />
            <Input placeholder="Confirme sua nova senha" bg="gray.600" secureTextEntry />
            <Button title="Atualizar profile" mt={4} mb={10} />
          </Center>
        </ScrollView>
      </VStack>
    </>
  );
}
