import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Add from './Add';
import Home from './Home';
import Put from './Put';
import Get from './Get';
import Delete from './Delete';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/post" element={<Add></Add>} />
        <Route path="/" element={<Home />} />
        <Route path="/put" element={<Put />} />
        <Route path="/get" element={< Get/>} />
        <Route path="/delete" element={< Delete/>} />
      </Routes>
    </Router>
    
  );
};

export default App;