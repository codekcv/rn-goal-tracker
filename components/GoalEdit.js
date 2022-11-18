import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useGoals } from '../contexts/GoalsContext';

export default function GoalEdit({ goal, isSelected, handleIsSelected }) {
  const [isEditting, setIsEditting] = useState(false);
  const { dispatch: goalsDispatch } = useGoals();
  const [editText, setEditText] = useState(goal.text);

  const { id, text, done } = goal;

  function handleEdit() {
    setIsEditting((e) => !e);
  }

  function handleTextChange(input) {
    setEditText(input);
  }

  function handleSubmit() {
    goalsDispatch({
      type: 'edit',
      id,
      value: editText,
    });

    handleEdit();
  }

  function handleDone() {
    goalsDispatch({
      type: 'done',
      id,
      value: !done,
    });
  }

  function handleDelete() {
    goalsDispatch({ type: 'delete', id });
  }

  return (
    <Modal visible={isSelected} animationType="slide">
      <View style={styles.container}>
        <View>
          {!isEditting ? (
            <Text
              style={{
                ...styles.textInput,
                textDecorationLine: done ? 'line-through' : 'none',
              }}
            >
              {text}
            </Text>
          ) : (
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={handleTextChange}
                value={editText}
              />

              <Button title="Submit" color="#f31282" onPress={handleSubmit} />
            </View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Back" color="#f31282" onPress={handleIsSelected} />
          </View>

          <View style={styles.button}>
            <Button title="Edit" onPress={handleEdit} color="#b180f0" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={!done ? 'Done' : 'Undone'}
              onPress={handleDone}
              color="#b180f0"
            />
          </View>

          <View style={styles.button}>
            <Button title="Delete" onPress={handleDelete} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#311b6b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#120438',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
