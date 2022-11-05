import { Text, Pressable, IPressableProps } from 'native-base';
import React from 'react';

export interface GroupProps extends IPressableProps {
  name?: string;
  isActive?: boolean;
}

export function Group({ name = 'Group Props', isActive, ...rest }: GroupProps) {
  return (
    <>
      <Pressable
        mr={3}
        w={24}
        h={10}
        bg="gray.600"
        rounded="md"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        isPressed={isActive}
        _pressed={{
          borderColor: 'green.400',
          borderWidth: 1,
        }}
        {...rest}
      >
        <Text color={isActive ? 'green.500' : 'gray.200'} textTransform="uppercase" fontSize="xs" fontFamily="heading">
          {name}
        </Text>
      </Pressable>
    </>
  );
}
