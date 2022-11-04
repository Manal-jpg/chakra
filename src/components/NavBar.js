import React from 'react';
import {Flex, Button, IconButton, ColorModeScript, useColorMode, Box, HStack, Spacer} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';

function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Flex  w="100%"> 

                <Button > Manalav </Button>
                <Spacer /> 
                <IconButton icon={colorMode === "light" ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound="true" size="lg"  />

        </Flex>
    )
}

export default NavBar
