export enum TodoItemStatus {
  TODO = 0,
  DONE = 1
}

export class TodoItem {
  public constructor() {}
  public id: number;
  public description: string;
  public status: TodoItemStatus;
  public index: number;
}
