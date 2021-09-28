import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Contant from './components/Contant/Contant';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  
  return (
    <BrowserRouter>
    <div className = 'App-wrapper'>
    <Header />
    <Navbar />
      <div className='App-wrapper-contant'>
        <Route path='/contant' render={() => <Contant class = '.contant' posts={props.state.contantPage.posts}/>}/>
        <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages} />}/>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/setting' component={Setting} />
      </div>
      <Sidebar />    
    </div>
    </BrowserRouter>
  );
}
export default App;
