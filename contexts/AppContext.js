import { createContext, useContext, useMemo, useReducer } from 'react';

function stateReducer(state, action) {
  switch (action.type) {
    case 'toggle-add-modal':
      return { ...state, isAdding: !state.isAdding };
    case 'toggle-edit-modal':
      return { ...state, isEditing: !state.isEditing, activeId: action.value };
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = { isAdding: false, isEditing: false, activeId: null };

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}
