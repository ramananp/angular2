import {Component} from 'angular2/core';
import {TodoInput} from './todo-input'
import {TodoService} from './todo-service';
import {TodoList} from './todo-list';
import {StatusSelector} from './status-selector';

@Component({
    selector: 'my-app',
    directives: [TodoInput, TodoList, StatusSelector],
    template: ` <div>
                  <todo-input></todo-input>
                  <status-selector (select)="status = $event"></status-selector>
                  <todo-list [status]="status"></todo-list>
                </div>`
})
export class AppComponent { }
