import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './views';
import Agent from './views/Agent';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agent" element={<Agent />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
