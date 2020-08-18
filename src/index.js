import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let names = ['xujiabo', 'gaozehngyan']
let name = 'xujiabo'
let flag = true

ReactDOM.render(
    <React.StrictMode>
        <p className='namecss'>i am {name}</p>
        {flag ? <h1>hello React</h1> : <h1>goodBay React</h1>}
        {
            names.map((name, index) =>
                <p key={index}>hello,i am {name}</p>
            )
        }
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
