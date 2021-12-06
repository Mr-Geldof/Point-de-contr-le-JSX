
import './App.css';
import Video from './composents/Video';
import Style from './Style/MonStyle.css'

function App() {
  return (
  <div className="App">
      <div>
      <h1 className="title-red">Aubrey MBOLO</h1>
          <img src="/man1.jpg" alt="image1"></img>
          <img src={"https://images.unsplash.com/photo-1551828060-1bcda73c75bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80"} alt="image2"></img>
      </div>
      <div className="hello">
      <Video/>
      </div>
    </div>
  );
}

export default App;
