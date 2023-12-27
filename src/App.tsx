import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';

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
      path='/profile'
      element={
        <Layout>
        <Profile/>
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
