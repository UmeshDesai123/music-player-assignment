import './App.css';
import LeftSideBar from './components/leftSideBar/leftSideBar';
import MainPage from './components/mainPage/mainPage';
import RightSideBar from './components/rightSideBar/rightSideBar';

function App() {
  return (
    <div className='app'>
      <LeftSideBar></LeftSideBar>
      <MainPage></MainPage>
      <RightSideBar></RightSideBar>
    </div>
  );
}

export default App;
