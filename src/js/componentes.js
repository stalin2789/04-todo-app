import { ToDo } from '../classes';
import { tareasLista } from '../index';

//referencias en el html
const divTodoList = document.querySelector('.todo-list');
const inputNewToDo = document.querySelector('.new-todo');
const buttonClearCompleted = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

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
    }else if (nombreElemento.includes('button')){
        //hay que borrar el todo
        tareasLista.eliminarToDo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    console.log(tareasLista);
})

buttonClearCompleted.addEventListener('click', ()=>{
    tareasLista.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--){
        
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')){

            divTodoList.removeChild(elemento);
        }

    }
})

ulFilters.addEventListener('click', ( event )=>{

    const filtro = event.target.text;

    if (!filtro) return;

    anchorFilters.forEach(element => {
        element.classList.remove('selected');
    });

    event.target.classList.add('selected');

    for (const elemento of divTodoList.children){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if (completado){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if (!completado){
                    elemento.classList.add('hidden');
                }
            break;

        }
    }
})
