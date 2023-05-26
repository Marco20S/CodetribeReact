import logo from './logo.svg';
import service from './components/features';
import './App.css';
import NavigationBar from './components/NaviBar';
import About from './components/about';
import Table from './components.Roadmap'
import Service from './components/features';
import Facts from './components/FAQs'
import Layers from './components/Us';




function App () {
  return (
      <section className='Wow'> 
      <head>

      <BrowserRouter>

      <NavigationBar/>
      </BrowserRouter>
        

      </head>

      <body>

      <h1>Welcome To PEPECHAIN</h1>
      <br/>

      <About/>

      <br/>

      <Service/>

      <br/>

      <Table/>
      <br/>

      <Layers/>

      <br/>

      <Facts/>
      
      
      </body>

      <footer>

      <BrowserRouter>

      <NavigationBar/>
      </BrowserRouter>


      </footer>

      
      </section>
      

      
  )

  
  
  }
import { BrowserRouter } from 'react-router-dom';
  
  export default App
