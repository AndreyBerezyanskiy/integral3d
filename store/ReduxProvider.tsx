'use client';

import { ReactNode } from 'react';
import { Provider } from "react-redux";
import { store } from './store';

interface ReduxProviderProps {
  children: ReactNode; // Properly typed children as any valid React node.
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
