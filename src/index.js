import './styles.css'

import { ToDo, ToDoList } from './classes'; //busca automatica el index .js
import { crearToDoHtml } from './js/componentes';

export const tareasLista = new ToDoList();

// const tarea = new ToDo('Aprender Angular!');

// tareasLista.nuevoToDo(tarea);

// tarea.completado = true;

// console.log(tareasLista);

// crearToDoHtml( tarea );

// localStorage.setItem('myKey', '420');
// sessionStorage.setItem('myKeyX', '4207');


// setTimeout(()=>{
//     localStorage.removeItem('myKey');
// }, 3000);


// tareasLista.todos.forEach(todo => crearToDoHtml( todo )); //forma entendible 
tareasLista.todos.forEach(crearToDoHtml); //forma abreviada

tareasLista.todos[0].imprimirClase();
