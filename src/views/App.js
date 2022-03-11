
import './App.css';
import SideBar from './sidebar/SideBar'
import Main from './main/Main';
import Footer from './footer/Footer';
import Navb from './nav/Nav';

function App() {
  return (
    <div className="App">
      
      <Navb/>
      <SideBar/>
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;

