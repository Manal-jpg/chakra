import {ColorModeScript, Flex, Heading, HStack} from '@chakra-ui/react';
import {VStack, IconButton, useColorMode, Button} from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Branches from './pages/Branches';
function App() {





  return (
    <Router>     
        <VStack p={4}> 
          <NavBar/> 
        </VStack>
        <Routes> 
            <Route exact path="/login" element={<LoginPage/>}/> 
            <Route exact path="/signup" element={<SignupPage/>}/>
            <Route exact path="/branches" element={<Branches/>} />
          </Routes> 
    </Router>
  );
}

export default App;
