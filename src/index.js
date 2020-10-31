import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


const App = () => {
    return (
      <>
        <h1> Hello </h1>
        <button>Push me please </button>
        <p>Not now ss</p>
      </>
    )
}

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // {/* </React.StrictMode>, */}
  document.getElementById('root')
);

