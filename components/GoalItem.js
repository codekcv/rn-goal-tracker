import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import GoalEdit from './GoalEdit';

export default function GoalItem({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggle() {
    setIsModalOpen((t) => !t);
  }

  return (
    <View style={styles.goalItem}>
      <GoalEdit data={data} handleToggle={handleToggle} isOpen={isModalOpen} />

      <Pressable
        android_ripple={{ color: '#ddd' }}
        // onPress={handleDelete.bind(this, data.item.id)}
        onPress={handleToggle}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>
          {`${data.index + 1}: ${data.item.text}`}{' '}
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
  },
});
