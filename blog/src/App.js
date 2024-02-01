import './App.css';
import HeaderNav from './Header/HeaderNav';
import Main from './Main/Main';
import About from './About/About';
import Posts from './Posts/Posts';
import Skills from './Skills/Skills';
function App() {
  return (
    <div className='App'>
      <div className='Background'>
       <div className='background-color'>
         <HeaderNav/>
         <Main/>
       </div>
        <About/>
        <Posts/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;

