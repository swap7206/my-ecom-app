'use client';

import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react';
import { Product } from '@/types/product';

type State = {
  products: Product[];
  productMap: Record<number, Product>; // for caching by id
};

const initialState: State = {
  products: [],
  productMap: {},
};

type Action =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_PRODUCT_CACHE'; payload: Product };


function productReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };

    case 'SET_PRODUCT_CACHE':
      return {
        ...state,
        productMap: {
          ...state.productMap,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
}

const ProductContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used inside ProductProvider');
  }
  return context;
};
