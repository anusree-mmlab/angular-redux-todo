import { ITodo } from './todo';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './actions';


export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
};

export function rootReducer(state, action) {


    switch (action.type) {
        case ADD_TODO:
            const newTodo = [...state.todos, action.todo];

             state = {...state, todos: newTodo, lastUpdate: new Date().toLocaleDateString()};
        return state;
        default: return state;
    }
}
