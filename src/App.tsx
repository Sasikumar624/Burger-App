import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';
import { Showcase } from './pages/Showcase';
import { MobileLayout } from './layouts/MobileLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Showcase />} />
        
        {/* Interactive App Routes */}
        <Route element={<MobileLayout />}>
          <Route path="/app" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;