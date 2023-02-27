import React from 'react';
import {
    Box,
    Spacer, 
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Grid,
    HStack,
    Image
  } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

function Branch({imageUrl, branchName}) {
    return (

        <Box
            m={'40px'}
            maxW={'330px'}
            w={'full'}
            maxH={'440px'}
            h={'440px'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            >
            <Image
                h="220px"
                w="330px"
                src={imageUrl}
                alt={`Picture of ${branchName}`}
                roundedTop="lg"
            />
    
            <Box  px={6} py={10}>
                <List spacing={3}>
                <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    {branchName} салбар
                </ListItem>
                </List>
                <Button
                mt={10}
                w={'full'}
                bg={'green.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                    bg: 'green.500',
                }}
                _focus={{
                    bg: 'green.500',
                }}>
                Цаг захиалах
                </Button>
            </Box>
        </Box>







    )
}

export default Branch
