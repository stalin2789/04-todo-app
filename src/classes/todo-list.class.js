export class ToDoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoToDo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarToDo(id) {
        const idInt = parseInt(id, 10);

        this.todos = this.todos.filter(todo => todo.id !== idInt)
        //regresa un arreglo excluyendo al del id que le envio
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        //convertir el id que recibimos a numero
        const idInt = parseInt(id, 10);

        for (const todo of this.todos) {
            if (todo.id === idInt) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();

                break;
            }
        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => todo.completado != true);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        // if (localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        // }else {
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo')) //si existe
        : this.todos = []; //caso contrario

    }
}