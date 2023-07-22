import './styles/App.css';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Box minHeight="100%">
      <Outlet />
    </Box>
  );
}