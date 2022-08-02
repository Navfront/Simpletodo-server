import { Todo } from 'src/app.model';

export class UpdateTodoDto {
  readonly userId: string;
  readonly todo: Todo;
}
