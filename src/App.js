import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Option from "./components/Option";
import Breakdown from './components/Breakdown';

function App() {
  return (
    <div>
      <div className='ml-7'>
        <h1 className='text-2xl text-gray-500 font-bold mt-7 mb-7'>My Rent</h1>
      </div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Option/>}/>
          <Route path='/payment' exact element={<Breakdown/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
