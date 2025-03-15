import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{

  sharedService=inject(SharedService);
  todoList:any;

  ngOnInit(): void {
    this.todoList=this.sharedService.getTodos();
  }

}
