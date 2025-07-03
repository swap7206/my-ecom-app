export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// export interface ProductState {
//   products: Product[];
//   selectedProduct: Product | null;
//   loading: boolean;
//   error: string | null;
//   currentView: 'listing' | 'detail';
//   productCache: Map<number, Product>;
//   filters: {
//     category: string[];
//     priceRange: [number, number];
//     rating: number;
//     sortBy: string;
//   };
//   searchQuery: string;
// }

// export type ProductAction = 
//   | { type: 'FETCH_PRODUCTS_START' }
//   | { type: 'FETCH_PRODUCTS_SUCCESS'; payload: Product[] }
//   | { type: 'FETCH_PRODUCTS_ERROR'; payload: string }
//   | { type: 'FETCH_PRODUCT_START'; payload: number }
//   | { type: 'FETCH_PRODUCT_SUCCESS'; payload: Product }
//   | { type: 'FETCH_PRODUCT_ERROR'; payload: string }
//   | { type: 'SET_CURRENT_VIEW'; payload: 'listing' | 'detail' }
//   | { type: 'CACHE_PRODUCT'; payload: Product }
//   | { type: 'SET_SELECTED_PRODUCT'; payload: Product | null }
//   | { type: 'SET_FILTERS'; payload: Partial<ProductState['filters']> }
//   | { type: 'SET_SEARCH_QUERY'; payload: string }
//   | { type: 'CLEAR_ERROR' };

export interface Category {
  id: string;
  name: string;
  count: number;
}
