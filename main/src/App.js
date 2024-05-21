import { Routes, Route } from 'react-router-dom'

import Card from './pages/Card'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main>
      <Routes>
        <Route index element={<Card/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
