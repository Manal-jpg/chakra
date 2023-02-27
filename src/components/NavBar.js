import React from 'react';
import {Flex, Button, IconButton, ColorModeScript, useColorMode, Box, HStack, Spacer} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';
import {Link} from 'react-router-dom';
function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
<<<<<<< HEAD
        <Flex  w="100%"> 

                <Button > Manalav </Button>
                <Spacer /> 
                <IconButton icon={colorMode === "light" ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound="true" size="lg"  />

=======
        <Flex w="100%"> 
            <Button ml="1" size="lg">  <Link to="/"> ELF Next Door  </Link> </Button>
            <Spacer> </Spacer> 
            <Button size="lg" mr="5"> <Link to="/login"> login  </Link> </Button>
            <IconButton icon={colorMode === "light" ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound="true" size="lg" alignSelf="flex-end" mr="5"/>
>>>>>>> e3247bdc12ced488e1a9d01889f2c2fb8d98cbbd
        </Flex>
    )
}

export default NavBar
