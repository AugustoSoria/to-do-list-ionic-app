import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private storageKey = 'tasks';

  saveTodo(todo: ITodo) {
    const prevTodos = this.getTodos();
    const newTodos = prevTodos.concat([todo]);
    localStorage.setItem(this.storageKey, JSON.stringify(newTodos));
  }

  getTodos(): ITodo[] {
    const todoData = localStorage.getItem(this.storageKey);
    if (todoData) {
      return JSON.parse(todoData);
    }
    return [];
  }
}
