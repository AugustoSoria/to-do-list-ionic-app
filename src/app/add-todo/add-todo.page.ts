import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ITodo } from '../model/todo.model';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class AddTodoPage {
  title: string = '';
  date: string = '';
  description: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    const newTodo: ITodo = {
      title: this.title,
      date: this.date,
      description: this.description,
    };

    this.todoService.saveTodo(newTodo);
  }
}
