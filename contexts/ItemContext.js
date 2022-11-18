import { createContext, useContext } from 'react';

export const ItemContext = createContext(null);

export function useItem() {
  return useContext(ItemContext);
}
