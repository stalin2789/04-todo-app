import './styles.css'

import { ToDo, ToDoList } from './classes'; //busca automatica el index .js
import { crearToDoHtml } from './js/componentes';

const tareasLista = new ToDoList();
const tarea = new ToDo('Aprender Angular!');

tareasLista.nuevoToDo(tarea);

// tarea.completado = true;

console.log(tareasLista);

crearToDoHtml( tarea );
