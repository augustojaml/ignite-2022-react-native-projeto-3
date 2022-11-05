import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HeaderHome } from '@components/HeaderHome';
import { FlatList, HStack, Text, VStack } from 'native-base';
import React, { useCallback, useState } from 'react';

export function Home() {
  const [groupSelected, setGroupSelected] = useState<string | undefined>('Costas');
  const [groups, setGroups] = useState(['Costas', 'Biceps', 'Triceps', 'Ombro']);
  const [exercisies, setExercisies] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ]);

  const handleChangeGroup = useCallback((groupName: string) => {
    setGroupSelected(groupName);
  }, []);

  return (
    <>
      <VStack flex={1}>
        <HeaderHome />

        <FlatList
          data={groups}
          keyExtractor={item => String(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={groupSelected?.toLocaleUpperCase() === item.toLocaleUpperCase()}
              onPress={() => handleChangeGroup(item)}
            />
          )}
          _contentContainerStyle={{
            px: 8,
          }}
          my={10}
          maxH={10}
        />
        <VStack flex={1} px={8}>
          <HStack justifyContent="space-between" mb={5}>
            <Text color="gray.200" fontFamily="heading" fontSize="md">
              Exercícios
            </Text>
            <Text color="gray.200" fontSize="sm">
              {exercisies.length}
            </Text>
          </HStack>

          <FlatList
            data={exercisies}
            keyExtractor={item => String(item)}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{
              pb: 20,
            }}
            renderItem={({ item }) => <ExerciseCard name={item} />}
          />
        </VStack>
      </VStack>
    </>
  );
}
