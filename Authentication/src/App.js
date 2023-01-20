import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {!isLoggedIn && <Route path='/auth' element={<AuthPage />} />}
        {isLoggedIn && <Route path='/profile' element={<UserProfile />} />}
        <Route path="*" element={<Navigate replace to='/' />} />
      </Routes>
    </Layout>
  );
}

export default App;
