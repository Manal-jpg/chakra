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
import Branch from '../components/Branch';
  
function Branches() {
    return (
      <Center py={6}>
        <HStack> 
            <Branch imageUrl={"http://shangrilacentreub.mn/media/shangrila/content/web_Shangri-LaCentre.jpg"}  branchName={"Shangri-La"} />

            <Branch imageUrl={"https://scontent.fuln2-2.fna.fbcdn.net/v/t31.18172-8/14068597_906824536117763_3372603366612006854_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7kHQ5ZZcm8EAX9HrdQU&tn=R2pEhUkkLpdMK2PA&_nc_ht=scontent.fuln2-2.fna&oh=00_AT9IJwoxHHZZ1Aql7LsaCBVZKTgnFAhIbtBhtgdSMkz_mg&oe=623D6439"} branchName={"Zaisan Hill"} />
        </HStack>
      </Center>
    );
  }


  export default Branches