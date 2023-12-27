import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Learn Nest.js', done: false },
    { id: 2, description: 'Learn GraphQL', done: false },
    { id: 3, description: 'Learn TypeScript', done: true },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);

    return todo;
  }

  create(CreateTodoInput: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.description = CreateTodoInput.description;
    todo.id = Math.max(...this.todos.map((todo) => todo.id), 0) + 1;
    this.todos.push(todo);

    return todo;
  }

  update(UpdateTodoInput: UpdateTodoInput): Todo {
    const todo = this.findOne(UpdateTodoInput.id);

    Object.assign(todo, UpdateTodoInput);

    return todo;
  }

  delete(id: number): boolean {
    const todo = this.findOne(id);

    this.todos = this.todos.filter((item) => item.id !== todo.id);

    return true;
  }
}
