import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  theToDoList: ToDo[] = [
    { task: 'Lab 13-3', completed: false },
    { task: 'Friday Retro', completed: false },
    { task: 'Call parents', completed: true },
    { task: 'Water plants', completed: false },
    { task: 'Make pot pie', completed: true },
    { task: 'Visit family', completed: false },     
    { task: 'Twerk', completed: true }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  completeTask(item: ToDo) {
    item.completed = true;
  }

  newTask: string = '';

  addTask() {
    this.theToDoList.push( { task: this.newTask, completed: false} );
    this.newTask = '';
  }

  deleteTask(item: ToDo) {
    this.theToDoList.splice(this.theToDoList.indexOf(item), 1);
  }

}
