import { Image, IImageProps } from 'native-base';
import React from 'react';

interface Props extends IImageProps {
  size?: number;
}

export function Avatar({ size = 16, ...rest }: Props) {
  return (
    <>
      <Image w={size} h={size} rounded="full" borderWidth={2} borderColor="gray.400" {...rest} />
    </>
  );
}
