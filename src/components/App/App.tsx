import { Routes, Route } from 'react-router-dom';
import Account from '../../pages/Account/Account';

const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Account />} />
      </Routes>
    );
}

export default App;
