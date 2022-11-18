import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import GoalList from './components/GoalList';
import AppProvider, { useApp } from './contexts/AppContext';
import GoalsProvider from './contexts/GoalsContext';
import GoalInput from './components/GoalInput';

function Main() {
  const { dispatch } = useApp();

  function handleAdd() {
    dispatch({ type: 'toggle-add-modal' });
  }

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Text style={styles.title}>Goal Tracker V5s</Text>
        <Button title="Add New Goal" color="#a065ec" onPress={handleAdd} />
        <GoalInput />
        <GoalList />
      </View>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <GoalsProvider>
        <Main />
      </GoalsProvider>
    </AppProvider>
  );
}

// export default function App() {
//   return (
//     <GoalsProvider>
//       <StatusBar style="light" />

//       <View style={styles.appContainer}>
//         <Text style={styles.title}>Goal Tracker V4s</Text>

//         {/* <Button
//           title="Add New Goal"
//           color="#a065ec"
//           onPress={handleToggleModal}
//         />

//         <GoalInput toggle={handleToggleModal} isVisible={isModalVisible} />
//         <GoalList /> */}
//       </View>
//     </GoalsProvider>
//   )
// }

// export default function App() {
//   return (
//     <View>
//       <GoalsProvider>
//         <Main />
//       </GoalsProvider>
//     </View>
//   )
// }

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
