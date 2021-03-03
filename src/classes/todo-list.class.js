
export class ToDoList {

    constructor(){
        this.todos = [];
    }

    nuevoToDo( todo ){
        this.todos.push(todo);
    }

    eliminarToDo( id ){
        const idInt = parseInt(id, 10);

        this.todos = this.todos.filter( todo => todo.id !== idInt) 
        //regresa un arreglo excluyendo al del id que le envio
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