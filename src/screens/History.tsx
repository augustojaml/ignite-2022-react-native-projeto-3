import { HeaderDefault } from '@components/HeaderDefault';
import { HistoryCard } from '@components/HistoryCard';
import { Text, VStack, SectionList } from 'native-base';
import React, { useState } from 'react';

const SECTION = [
  {
    title: '26.08.22',
    data: [
      {
        id: '1',
        exercise: 'Costas',
        description: 'Puxada frontal',
      },
      {
        id: '2',
        exercise: 'Costas',
        description: 'Puxada Unilateral',
      },
    ],
  },
  {
    title: '25.08.22',
    data: [
      {
        id: '3',
        exercise: 'Costas',
        description: 'Puxada frontal',
      },
    ],
  },
];

export function History() {
  const [exercises, setExercises] = useState(true ? SECTION : []);
  return (
    <>
      <VStack flex={1}>
        <HeaderDefault title="Histórico de exercício" />
        <SectionList
          px={8}
          sections={exercises}
          keyExtractor={item => String(item.id)}
          renderSectionHeader={({ section: { title } }) => (
            <Text color="gray.200" fontFamily="heading" fontSize="sm" mt={6} mb={3}>
              {title}
            </Text>
          )}
          renderItem={({ item }) => <HistoryCard item={item} />}
          contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
          ListEmptyComponent={() => (
            <Text color="gray.200" fontFamily="heading" textAlign="center" fontSize="sm" mt={6} mb={3}>
              Não há exercícios registrados ainda...🏋️‍♂️ {'\n'}
              Vamos fazer exercícios hoje
            </Text>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </VStack>
    </>
  );
}
