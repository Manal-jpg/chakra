import {ColorModeScript, Flex, Heading, HStack} from '@chakra-ui/react';
import {VStack, IconButton, useColorMode, Button} from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import {useState, useEffect} from 'react';
import NavBar from './components/NavBar'

function App() {
 const initialTodos = []
 const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')|| []));

 useEffect(() => {

  localStorage.setItem('todos', JSON.stringify(todos));
 }, [todos]);



 function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id; 
    })
    setTodos(newTodos);
 }
 function addTodo(todo) {
  setTodos([...todos, todo]);
  console.log("oka");
}



  return (
    <VStack p={4}> 
      <NavBar/> 
      <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, pink.500, teal.400, purple.500)" bgClip="text">Add here if you have a thing to do</Heading>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    

    </VStack>
  );
}

export default App;
