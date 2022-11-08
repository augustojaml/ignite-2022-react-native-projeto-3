import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { HStack, Icon, Text, VStack, Image, Box } from 'native-base';
import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';

import { AppRoutesNavigationProps } from '@routes/AppRoutes';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

export function Exercise() {
  const { goBack } = useNavigation<AppRoutesNavigationProps>();

  const handleNavigationGobak = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <>
      <VStack flex={1}>
        <VStack px={8} bg="gray.600" pt={12}>
          <TouchableOpacity onPress={handleNavigationGobak}>
            <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
          </TouchableOpacity>
          <HStack justifyContent="space-between" alignItems="center" mt={4} mb={6}>
            <Text color="gray.100" fontFamily="heading" fontSize="lg" flexShrink={1}>
              Puxada frontal
            </Text>
            <HStack alignItems="center">
              <BodySvg />
              <Text color="gray.200" fontSize="md" ml="1" textTransform="capitalize">
                Costas
              </Text>
            </HStack>
          </HStack>
        </VStack>

        <VStack p={8}>
          <Image
            source={{ uri: 'https://vitat.com.br/wp-content/uploads/2020/01/fitness-woman-doing-stretching-e-1.jpg' }}
            alt="exercise"
            w="full"
            h={80}
            mb="3"
            resizeMode="cover"
            rounded="lg"
            overflow="hidden"
          />
          <Box bg="gray.600" rounded="md" p="4">
            <HStack justifyContent="space-around" alignItems="center" mt="5" mb={6}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml="2">
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml="2">
                  12 Repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </VStack>
    </>
  );
}
