import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <>
            <h1>Hello from react</h1>
            <Pizza />
            <Pizza />
            <Pizza />
        </>
    );
}

function Pizza() {

    return (
        <>
            <img src="pizzas/spinaci.jpg" alt='Pizza spinaci'></img>
            <h2>Pizza Spinaci</h2>
            <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)