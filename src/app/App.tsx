
import { Link } from 'react-router-dom';
import './styles/App.css';
import { Heading, ListItem, UnorderedList } from '@chakra-ui/react';

export function App() {
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <Heading>Welcome to Flowlish</Heading>
      <UnorderedList styleType="none">
        <ListItem><Link to="/signin"><h1>Sign In</h1></Link></ListItem>
        <ListItem><Link to="/dashboard"><h1>Dashboard</h1></Link></ListItem>
      </UnorderedList>
    </div>
  );
}