import {Component, Input} from "angular2/core";
import {TodoService} from "./todo-service";
import {TodoModel} from "./todo-model";
import {TodoItemRenderer} from "./todo-item-renderer";
import {StartedPipe} from "./started-pipe";

@Component({
  selector: 'todo-list',
  pipes: [StartedPipe],
  directives: [TodoItemRenderer],
  template: ` <div>
                <ol>
                  <li *ngFor="#todo of todoService.todos | started: status">
                    <todo-item-renderer
                      [todo]="todo"
                      (toggle)="todoService.toggleTodo($event)">
                    </todo-item-renderer>
                  </li>
                </ol>
              </div>`
})
export class TodoList{
  @Input() status;
  constructor(public todoService:TodoService){

  }
}
