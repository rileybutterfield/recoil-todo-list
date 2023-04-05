import './App.css';
import React from 'react';
import {
  RecoilRoot,
} from 'recoil'
import TodoList from './TodoList';

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <TodoList />
    </div>
    </RecoilRoot>
  );
}

export default App;
