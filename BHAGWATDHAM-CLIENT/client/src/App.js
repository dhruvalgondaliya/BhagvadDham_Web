import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Activites from './Pages/Activites.jsx';
import Gallery from './Pages/Gallery.jsx';
import School from './Pages/School.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path="/activites" element={<Activites/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/School" element={<School/>}/>
      </Routes>
    </>
  );
}

export default App;
