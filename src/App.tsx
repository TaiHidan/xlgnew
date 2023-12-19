import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return (
  <Router>
    <Routes>
      <Route
      path='/home'
      element={
        <Layout>
        <Home/>
        </Layout>
      }
      />

      <Route 
      path='*'
      element={
        <Navigate to ={"/home"}/>
      }
      />
    </Routes>

  </Router>
  );
}

export default App;
