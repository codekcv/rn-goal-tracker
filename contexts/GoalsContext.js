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
      return goals.map((goal) => {
        if (goal.id === action.id) {
          return { ...goal, text: action.value };
        } else {
          return goal;
        }
      });
    }
    case 'done': {
      return goals.map((goal) => {
        if (goal.id === action.id) {
          return { ...goal, done: action.value };
        } else {
          return goal;
        }
      });
    }
    case 'delete': {
      return goals.filter((goal) => goal.id !== action.id);
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
