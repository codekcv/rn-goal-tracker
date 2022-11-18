import { createContext, useContext, useMemo, useReducer } from 'react';

function goalsReducer(goals, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...goals,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edit': {
      return goals.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return goals.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialGoals = [
  { id: 0, text: 'Hello beautiful world!', done: false },
  { id: 1, text: 'The quick brown fox is sexy!', done: false },
];

export default function GoalsProvider({ children }) {
  const [goals, dispatch] = useReducer(goalsReducer, initialGoals);
  const value = useMemo(() => ({ goals, dispatch }), [goals]);

  return (
    <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
}

const GoalsContext = createContext(null);

export function useGoals() {
  return useContext(GoalsContext);
}
