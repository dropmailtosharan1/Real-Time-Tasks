import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

 private todos=['todo 1','todo 2'];

  getTodos(){
    return this.todos;
  }

  addTodos(task:any){
    this.todos.push(task);
  }
}
