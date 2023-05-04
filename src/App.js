import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Common/Sidebar';
import Reports from './Components/pages/reports/Reports';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Reports />
    </div>
  );
}

export default App;
