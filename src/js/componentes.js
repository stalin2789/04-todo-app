import { ToDo } from '../classes';
import { tareasLista } from '../index';

//referencias en el html
const divTodoList = document.querySelector('.todo-list');
const inputNewToDo = document.querySelector('.new-todo');

export const crearToDoHtml = ( todo )=> {
    const htmlTodo = `
    <li class="${ (todo.completado) ? "completed":"" }" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completado) ? "checked":"" }>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Rule the web">
	</li>
    `;

    const div = document.createElement('div');

    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos
inputNewToDo.addEventListener( 'keyup', ( event ) => {

    if (event.keyCode === 13 && inputNewToDo.value.length > 0){
        
        const nuevoToDo = new ToDo(inputNewToDo.value);
        tareasLista.nuevoToDo(nuevoToDo);

        crearToDoHtml(nuevoToDo);
        inputNewToDo.value = '';
    }
} )

divTodoList.addEventListener('click', ( event )=>{

    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')){
        tareasLista.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }

    console.log(tareasLista);
})
