import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import GoalList from './components/GoalList';
import GoalsProvider from './contexts/GoalsContext';
import GoalInput from './components/GoalInput';
import { useState } from 'react';

function Main() {
  const [isAdding, setIsAdding] = useState(false);

  function handleToggle() {
    setIsAdding((a) => !a);
  }

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Text style={styles.title}>Goal Tracker V5s</Text>
        <Button title="Add New Goal" color="#a065ec" onPress={handleToggle} />
        <GoalInput isAdding={isAdding} handleToggle={handleToggle} />
        <GoalList />
      </View>
    </>
  );
}

export default function App() {
  return (
    <GoalsProvider>
      <Main />
    </GoalsProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    color: '#a065ec',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
});
