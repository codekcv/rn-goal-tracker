import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function GoalEdit({ data, handleToggle, isOpen }) {
  const {
    item: { text },
  } = data;

  function handleSubmit() {}

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.container}>
        <Text>{text}</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={handleToggle} />
          </View>

          <View style={styles.button}>
            <Button title="Edit" onPress={handleSubmit} color="#b180f0" />
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
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
