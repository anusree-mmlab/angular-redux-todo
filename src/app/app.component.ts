import { Component, OnInit, ViewChild } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './redux/store';
import { ADD_TODO } from './redux/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('todoval') todoval;

  stateval: any = {counter : 0,
    person :  [ [ 'cook'],
                ['wash'],
        ]
   };
   @select() todos;
   todoData = [];


constructor(private ngRedux: NgRedux<IAppState>)  {
  this.stateval = [...this.stateval.person, ['cook']];
  console.log(this.stateval);
}

  ngOnInit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: ['cook']});

    this.todos.subscribe((todolist) => {
      this.todoData = todolist;
      console.log('gdfdf', todolist);
    });
  }

  addTodo() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: [this.todoval.nativeElement.value]});
    this.todoval.nativeElement.value = '';
  }
}
