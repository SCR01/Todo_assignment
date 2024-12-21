import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.items);

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};