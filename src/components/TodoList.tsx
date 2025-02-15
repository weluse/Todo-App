import classes from "./TodoList.module.css";
import TodoDetails from "./TodoDetails";
import TodoModel, { filter } from "../models/todo";
import { getItemCount } from "../utils/count";
import TodoCount from "./TodoCount";

const TodoList: React.FC<{ todoList: TodoModel[]; filterOrder: filter }> = ({
  todoList,
  filterOrder,
}) => {
  const allTodos =
    filterOrder === filter.all &&
    todoList.map((todo) => <TodoDetails key={todo.id} todo={todo} />);

  const completedTodos =
    filterOrder === filter.completed &&
    todoList
      .filter((todo) => todo.complete === true)
      .map((todo) => <TodoDetails key={todo.id} todo={todo} />);

  const activeTodos =
    filterOrder === filter.active &&
    todoList
      .filter((todo) => todo.complete === false)
      .map((todo) => <TodoDetails key={todo.id} todo={todo} />);

  const count = getItemCount(allTodos, completedTodos, activeTodos);

  return (
    <div className={classes.todoList}>
      <TodoCount count={count} />

      {allTodos}
      {completedTodos}
      {activeTodos}
    </div>
  );
};

export default TodoList;
