import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../features/todos/todosSlice';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2 group hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          {todo.completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};