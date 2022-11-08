import { Input as InputNativeBase, IInputProps, VStack, HStack, Text, Icon } from 'native-base';
import React from 'react';
import { Feather } from '@expo/vector-icons';

interface InputProps extends IInputProps {
  error?: string;
}

export function Input({ error, ...rest }: InputProps) {
  return (
    <>
      <VStack w="full">
        <InputNativeBase
          bg="gray.700"
          h={14}
          px="4"
          borderWidth={0}
          fontSize="md"
          color="white"
          fontFamily="body"
          placeholderTextColor="gray.300"
          isInvalid={error !== undefined}
          _invalid={{
            borderWidth: 1,
            borderColor: 'red.500',
          }}
          _focus={{
            bg: 'gray.700',
            borderWidth: 1,
            borderColor: 'green.500',
          }}
          {...rest}
        />
        <HStack mt={-3} alignItems="center" h={10}>
          {error && (
            <>
              <Icon as={Feather} name="alert-circle" size="3" mt={1} color="red.500" mr="2" />
              <Text color="red.500">{error}</Text>
            </>
          )}
        </HStack>
      </VStack>
    </>
  );
}
