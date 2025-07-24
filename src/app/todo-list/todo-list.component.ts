import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
title: string = 'To-Do List';
tasks: string[] = [];
newTask: string = '';


addTask(){
  this.tasks.push(this.newTask);
  this.newTask = '';
}

removeTask(index: number){
  this.tasks.splice(index, 1);
}

}
