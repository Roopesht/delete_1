import logo from './logo.svg';
import './App.css';
import UserProfile from './components/userprofile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProfile userId="2" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
