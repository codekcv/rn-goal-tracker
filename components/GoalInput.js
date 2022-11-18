import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useApp } from '../contexts/AppContext';
import { useGoals } from '../contexts/GoalsContext';

export default function GoalInput() {
  const { dispatch } = useGoals();
  const { state, dispatch: appDispatch } = useApp();
  const [text, setText] = useState('');

  const handleInput = (input) => {
    setText(input);
  };

  function handleToggle() {
    appDispatch({ type: 'toggle-add-modal' });
  }

  const handleSubmit = () => {
    dispatch({
      type: 'add',
      id: Math.random().toString(),
      text,
    });

    setText('');
    handleToggle();
  };

  return (
    <Modal visible={state.isAdding} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleInput}
          value={text}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={handleToggle} />
          </View>

          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleSubmit} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: { width: 100, height: 100, margin: 20 },
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
