import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import { ChakraProvider, Button, ButtonGroup } from '@chakra-ui/react';
import Homepage from './Pages/Homepage';
// import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
    <div className="App">
      <Route path="/" component={Homepage} exact />
    </div>
      </ChakraProvider>
    </BrowserRouter>  
  );
}

export default App;
