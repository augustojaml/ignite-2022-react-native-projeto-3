import { Text, HStack, VStack, Icon } from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Avatar } from './Avatar';

interface HeaderHomeProps {
  userName?: string;
}

export function HeaderHome({ userName = 'User Name' }: HeaderHomeProps) {
  return (
    <>
      <HStack bg="gray.600" pt={16} pb={5} px="8" alignItems="center">
        <Avatar source={{ uri: 'https://github.com/augustojaml.png' }} alt="avatar-image" mr="4" />
        <VStack flex={1}>
          <Text color="gray.200" fontSize="md">
            Ola,
          </Text>
          <Text color="gray.100" fontFamily="heading" fontSize="md">
            {userName}
          </Text>
        </VStack>
        <TouchableOpacity>
          <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
        </TouchableOpacity>
      </HStack>
    </>
  );
}
