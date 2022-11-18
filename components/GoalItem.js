import { useEffect, useMemo, useReducer } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ItemContext } from '../contexts/ItemContext';
import GoalEdit from './GoalEdit';

function goalReducer(state, action) {
  switch (action.type) {
    case 'update-item':
      return { ...state, item: action.value };

    case 'toggle-selected':
      return { ...state, isSelected: !state.isSelected };

    case 'toggle-editting':
      return { ...state, isEditting: !state.isEditting };

    case 'edit':
      return { ...state, item: { ...state.item, text: action.value } };

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function GoalItem({ data }) {
  const initialState = {
    item: data.item,
    isSelected: false,
    isEditting: false,
  };

  const [state, dispatch] = useReducer(goalReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  function handleToggle() {
    dispatch({ type: 'toggle-selected' });
  }

  useEffect(() => {
    dispatch({ type: 'update-item', value: data.item });
  }, [data.item]);

  return (
    <ItemContext.Provider value={contextValue}>
      <View style={styles.goalItem}>
        <GoalEdit />

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
    </ItemContext.Provider>
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
