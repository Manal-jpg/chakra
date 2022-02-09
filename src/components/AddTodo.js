import { HStack, Text, IconButton, Input, Button, useToast  } from '@chakra-ui/react'
import React from 'react';
import {useState} from 'react';
import {nanoid} from 'nanoid';

function AddTodo({addTodo}) {

    
    const toast = useToast();
    function handleSubmit(e) {
        e.preventDefault();

        if(!content) {
            toast({
                title: "Empty Field",
                status: "warning",
                duration: 1000,
                isClosable: true
            })
            return 
        }
        const todo = {
          id: nanoid(),
          text: content,
        };
    
        addTodo(todo);
        setContent('');
      }
      const [content, setContent] = useState('');

    return <form onSubmit={handleSubmit}>
        <HStack my="8"> 
            <Input value={content} onChange={(e) => setContent(e.target.value)} variant="filled" placeholder="Have something to do?"/> 
            <Button colorScheme="pink" px="8" type="submit"> Add</Button>
            
        </HStack> 

    </form>
}

export default AddTodo
 