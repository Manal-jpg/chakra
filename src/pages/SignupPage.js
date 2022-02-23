import { VStack, Flex, HStack, Text, IconButton, Input, Button, useToast, FormControl  } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'

function SignupPage() {

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://192.168.0.120:4000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({
                firstName, 
                lastName,
                email,
                password,
                role:  'user',
            }), 
        }); 

        const content = await response.json();

        console.log(content);
    }


    return (
        <Flex align="center" justifyContent="center">  
            <form onSubmit="" align="center" justify="center" onSubmit={submit}> 
 
                    <VStack> 
                        <Input variant="filled" required onChange={e => setLastName(e.target.value)} placeholder="Овог"/> 
                        <Input variant="filled" required onChange={e => setFirstName(e.target.value)} placeholder="Нэр"/>
                        <Input variant="filled" required onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"/> 
                        <Input variant="filled" required onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                        <Input variant="filled" required onChange={e => setRepeatPassword(e.target.value)} type="password" placeholder="Password"/> 
                        <Input variant="filled" required onChange={e => setPhoneNumber(e.target.value)} type="number" placeholder="Утасны дугаар"/>
                        <Button type="submit"> Signup</Button>
                    </VStack>

            </form>

        </Flex>
    )
}

export default SignupPage
