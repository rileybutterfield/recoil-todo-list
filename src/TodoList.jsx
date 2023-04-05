import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './selectors';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './ToDoListStats';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <>
    <TodoItemCreator />
    <TodoListFilters />
    {todoList.map((todoItem) => 
      <TodoItem key={todoItem.id} item={todoItem} />
    )}
    <TodoListStats />
    </>
  );
}

export default TodoList;
