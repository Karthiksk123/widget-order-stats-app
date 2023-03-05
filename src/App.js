import './App.scss';
import Header from './components/Header/Header';
import WidgetOrderStats from './components/WidgetOrderStats/WidgetOrderStats';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <WidgetOrderStats/>
    </div>
  );
}

export default App;
