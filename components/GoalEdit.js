import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useItem } from '../contexts/ItemContext';
import { useGoals } from '../contexts/GoalsContext';

export default function GoalEdit() {
  const { dispatch, state } = useItem();
  const { dispatch: goalsDispatch } = useGoals();
  const [editText, setEditText] = useState(state?.item?.text ?? '');

  const { isSelected, isEditting } = state;

  const {
    item: { id, text },
  } = state;

  function handleToggle() {
    dispatch({ type: 'toggle-selected' });
  }

  function handleEdit() {
    dispatch({ type: 'toggle-editting' });
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

  return (
    <Modal visible={isSelected} animationType="slide">
      <View style={styles.container}>
        <View>
          {!isEditting ? (
            <Text>{text}</Text>
          ) : (
            <View style={{ width: '100%' }}>
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
            <Button title="Cancel" color="#f31282" onPress={handleToggle} />
          </View>

          <View style={styles.button}>
            <Button title="Edit" onPress={handleEdit} color="#b180f0" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Done" onPress={handleSubmit} color="#b180f0" />
          </View>

          <View style={styles.button}>
            <Button title="Delete" onPress={handleSubmit} color="#b180f0" />
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
