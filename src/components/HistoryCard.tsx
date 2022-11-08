import { Center, HStack, Text, VStack } from 'native-base';
import React from 'react';

interface HistoryCardProps {
  item?: {
    id: string;
    exercise: string;
    description: string;
  };
}

export function HistoryCard({ item }: HistoryCardProps) {
  return (
    <>
      <HStack
        w="full"
        px={5}
        py={4}
        mb={3}
        bg="gray.600"
        rounded="md"
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack>
          <Text color="gray.100" fontFamily="heading" fontSize="lg" textTransform="capitalize">
            {item?.exercise}
          </Text>
          <Text color="gray.300" fontSize="sm" numberOfLines={1}>
            {item?.description}
          </Text>
        </VStack>
        <Text color="gray.300" fontSize="md">
          08:56
        </Text>
      </HStack>
    </>
  );
}
