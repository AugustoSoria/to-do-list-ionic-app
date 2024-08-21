import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo/todo.service';
import { ITodo } from '../model/todo.model';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements ViewWillEnter {
  todoList: ITodo[] = [];

  constructor(private router: Router, private todoService: TodoService) {}

  ionViewWillEnter() {
    this.todoList = this.todoService.getTodos();
  }

  goToAddTodo() {
    this.router.navigateByUrl('/add-todo');
  }
}
