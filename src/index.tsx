import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/main/App';
import ToDo from './views/todo/ToDo';
import Error from './components/Error/Error';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderContext, header } from './components/Header/HeaderContext';
import Header from './components/Header/Header';
import AddToDo from './components/Todo/AddToDo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeaderContext.Provider value={header}>
      <Header title="Documentation"></Header>
    </HeaderContext.Provider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
