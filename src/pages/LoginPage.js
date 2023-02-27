import { Flex, HStack, VStack, Text, IconButton, Input, Button, useToast  } from '@chakra-ui/react'
import {React, useState} from 'react'
import NavBar from '../components/NavBar'
import {Link} from 'react-router-dom';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        console.log("haha");
        e.preventDefault();

        const response = await fetch('http://172.20.10.3:4000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email, 
                password
            }), 
        }); 
        console.log(response);
       console.log("I worked");
    }

    return (
        <Flex alignItems="center" justifyContent="center"> 
            <form onSubmit={submit}> 
                <VStack> 
                    <Input variant="filled" type="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/> 
                    <Input variant="filled" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                    <Button type="submit"> Login </Button>
                    <Link to="/signup">  Create new account</Link>
                </VStack>
            
            </form>

        </Flex>
    )
}

export default LoginPage
