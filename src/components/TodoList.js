import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge, Heading} from '@chakra-ui/react';
import {FaCheck} from 'react-icons/fa';
import React from 'react';
import {useState} from 'react';
import {
    Button, 
    ButtonGroup,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react';

function TodoList({todos, deleteTodo }) {
  


    console.log("I'm working!");

   if(!todos.length) {
       return( 
            <Badge colorScheme="purple" variant="solid" p="4" m="4" borderRadius="lg"> As of now, you have nothing to do</Badge>
       );
   }else{
    return (
        <VStack
        divider={<StackDivider/>} 
        borderColor="gray.100"
        borderWidth="2px" 
        p="4" 
        borderRadius="lg" 
        width="100%" 
        maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        alignItems="stretch"
        >
            {todos.map(todo => (
                <HStack key={todo.id}> 
                    <Text> {todo.text} </Text>
                    <Spacer/>

                    <Popover
                        returnFocusOnClose={false}
                         placement='right'
                        closeOnBlur={false}
                    >
                        <PopoverTrigger>

                        <IconButton icon={<FaCheck/>} isRound="true " />
                        </PopoverTrigger>

                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />

                            <PopoverBody>
                                Are you sure you have completed this activity?
                            </PopoverBody>
                            <PopoverFooter d='flex' justifyContent='flex-end'>

                            <Button colorScheme='red' onClick={() => {deleteTodo(todo.id)}}>Delete this item</Button>

                            </PopoverFooter>
                        </PopoverContent>
                    </Popover>
                </HStack>
            ))}

        </VStack>
    )
   }
}

export default TodoList