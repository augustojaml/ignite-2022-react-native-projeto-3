import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
import React from 'react';

interface Props extends IButtonProps {
  title?: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title = 'title', variant = 'solid', ...rest }: Props) {
  return (
    <>
      <ButtonNativeBase
        w="full"
        h={14}
        bg={variant === 'outline' ? 'transparent' : 'green.700'}
        borderWidth={variant === 'outline' ? 1 : 0}
        borderColor={variant === 'outline' ? 'green.500' : 'transparent'}
        rounded="sm"
        _pressed={{
          bg: variant === 'outline' ? 'gray.500' : 'green.500',
        }}
        {...rest}
      >
        <Text color={variant === 'outline' ? 'green.500' : 'gray.100'} fontSize="sm">
          {title}
        </Text>
      </ButtonNativeBase>
    </>
  );
}
