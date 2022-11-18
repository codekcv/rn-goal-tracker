import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useGoals } from '../contexts/GoalsContext';
import GoalEdit from './GoalEdit';

export default function GoalItem({ data }) {
  const [isSelected, setIsSelected] = useState(false);
  const { goals } = useGoals();

  const goal = goals.find((g) => g.id === data.item.id);

  function handleIsSelected() {
    setIsSelected((s) => !s);
  }

  return (
    <View style={styles.goalItem}>
      <GoalEdit
        goal={goal}
        isSelected={isSelected}
        handleIsSelected={handleIsSelected}
      />

      <Pressable
        android_ripple={{ color: '#ddd' }}
        // onPress={handleDelete.bind(this, data.item.id)}
        onPress={handleIsSelected}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text
          style={{
            ...styles.goalText,
            textDecorationLine: goal.done ? 'line-through' : 'none',
          }}
        >
          {`${data.index + 1}: ${goal.text}`}{' '}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
    textDecorationLine: 'line-through',
  },
});
