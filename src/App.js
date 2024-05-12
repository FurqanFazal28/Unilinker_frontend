import './App.css';
import Stepper from './Components/Stepper';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Question from './Components/Question';
import Result from './Components/Result';
import { ContextProvider } from './Hooks/UseStateContext'; 

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <ContextProvider> {/* Wrap all routes with ContextProvider */}
        <Routes>
          <Route path="/consultant" element={<Stepper />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
