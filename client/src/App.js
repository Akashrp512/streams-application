import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate';
import StreamShow from './components/streams/StreamShow';
import StreamList from './components/streams/StreamList';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';

function App() {
  return (
    <div className='ui container'>
      
      <BrowserRouter>
      <Routes>
          
          <Route path='/*' element={<Header />}/>
          <Route path='/' element= {<StreamList />}/>
          <Route path='/streams/new' element= {<StreamCreate />}/>
          <Route path='/streams/edit' element= {<StreamEdit />}/>
          <Route path='/streams/delete' element= {<StreamDelete />}/>
          <Route path='/streams/show' element= {<StreamShow />}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
