import React from 'react';
import AddTodo from '../containers/AddTodo.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'
import Footer from './Footer'

function App () {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    );
}

export default App;