import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useGoals } from '../contexts/GoalsContext';
import GoalItem from './GoalItem';

export default function GoalList() {
  const { goals } = useGoals();

  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.goalListText}>Goal List:</Text>

      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <GoalItem data={itemData} />}
      />
    </View>
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
  goalsContainer: {
    flex: 5,
  },
  goalListText: {
    color: '#f31282',
    marginTop: 24,
    marginBottom: 8,
    fontSize: 16,
  },
});
