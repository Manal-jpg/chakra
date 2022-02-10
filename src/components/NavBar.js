import React from 'react';
import {Flex, Button, IconButton, ColorModeScript, useColorMode, Box, HStack, Spacer, Link} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa';

function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Flex w="100%"> 
            <Button ml="1" size="lg"> Manalav </Button>
            <Spacer> </Spacer> 
            <Button size="lg" mr="5"> <Link href="https:/www.liv.mn"> Play Tic Tac Toe</Link> </Button>
            <IconButton icon={colorMode === "light" ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound="true" size="lg" alignSelf="flex-end" mr="5"/>
        </Flex>

    )
}

export default NavBar
