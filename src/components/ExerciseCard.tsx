import { HStack, Text, Image, VStack, Icon } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface ExerciseCardProps extends TouchableOpacityProps {
  name?: string;
}

export function ExerciseCard({ name = 'Exercise name', ...rest }: ExerciseCardProps) {
  return (
    <>
      <TouchableOpacity {...rest}>
        <HStack bg="gray.500" alignItems="center" p={2} pr="4" rounded="sm" mb={3}>
          <Image
            w={16}
            h={16}
            mr={4}
            rounded="md"
            source={{
              uri: 'https://vitat.com.br/wp-content/uploads/2020/01/fitness-woman-doing-stretching-e-1.jpg',
            }}
            alt="exercice"
            resizeMode="center"
          />
          <VStack flex={1}>
            <Text color="gray.100" fontFamily="heading" fontSize="lg">
              {name}
            </Text>
            <Text color="gray.300" fontSize="sm" mt={-1} numberOfLines={2}>
              3 séries x 12 repetições
            </Text>
          </VStack>
          <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
        </HStack>
      </TouchableOpacity>
    </>
  );
}
