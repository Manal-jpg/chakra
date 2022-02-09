import React from 'react';
import {Flex, Button, IconButton, ColorModeScript, useColorMode, Box, HStack, Spacer} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';

function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Flex alignItems="center" justifyContent="space-between"> 
            <HStack>
                <Button > Manalav </Button>
                <Spacer />
                <IconButton icon={colorMode === "light" ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound="true" size="lg" alignSelf="flex-end" />
            </HStack>
        </Flex>
    )
}

export default NavBar
