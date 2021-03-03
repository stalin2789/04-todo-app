
export class ToDoList {

    constructor(){
        this.todos = [];
    }

    nuevoToDo( todo ){
        this.todos.push(todo);
    }

    elimnarToDo( id ){

    }

    marcarCompletado( id ){

        //convertir el id que recibimos a numero
        const idInt = parseInt(id, 10);

        for (const todo of this.todos){
            if (todo.id === idInt ){

                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletados(){
        
    }
}