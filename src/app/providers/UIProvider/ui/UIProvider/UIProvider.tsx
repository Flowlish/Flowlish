import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface UIProviderProps {
  children: ReactNode,
}

export const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};
