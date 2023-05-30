import './App.css';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ServiceScreen from './screens/ServiceScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/login" element={<LoginScreen />} ></Route>
          <Route path="/" element={<HomeScreen />} exact></Route>
          <Route path="/service/:id" element={<ServiceScreen/>} ></Route>
        </Routes>


      </main>
    </Router>
  );
}

export default App;
