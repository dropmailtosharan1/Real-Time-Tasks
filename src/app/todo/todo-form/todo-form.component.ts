import { Component, inject } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { log } from 'node:console';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  sharedService=inject(SharedService)
  addNew(input:any){
  console.log(this.sharedService.getTodos());
  this.sharedService.addTodos(input.value);
  input.value='';
  console.log(this.sharedService.getTodos());
  
  }

}
