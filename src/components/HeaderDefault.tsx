import { Center, Text } from 'native-base';
import React from 'react';

interface DefaultHeaderScreenProps {
  title?: string;
}

export function HeaderDefault({ title = 'Default Header Screen' }: DefaultHeaderScreenProps) {
  return (
    <>
      <Center bg="gray.600" pt="16" pb="6">
        <Text color="gray.100" fontFamily="heading" fontSize="md">
          {title}
        </Text>
      </Center>
    </>
  );
}
