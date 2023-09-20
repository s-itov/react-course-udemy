import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our menu</h2>
            <Pizza
                name='Pizza spinaci'
                photoName='pizzas/spinaci.jpg'
                ingredients='Tomato, mozarella, spinach, and ricotta cheese'
                price={10}
            />
            <Pizza
                name="Pizza Funghi"
                photoName="pizzas/funghi.jpg"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                price={12}
            />
        </main>
    );
}

function Pizza(props) {
    return (
        <div className='pizza'>
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 3}</span>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open</footer>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)