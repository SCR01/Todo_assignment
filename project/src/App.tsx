import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { ListChecks } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto max-w-2xl px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-medium text-blue-600 mb-2">RemoteBricks Assignment</h2>
            <div className="flex items-center gap-3 mb-6">
              <ListChecks className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
            </div>
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;