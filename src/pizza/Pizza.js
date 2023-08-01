import "./Pizza.css";
import "./Data.js";
import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Pizza(pizza) {
  return (
    <div className="pizza">
      <img src={pizza.photoName} alt={pizza.name}></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredient}</p>
        <span>{pizza.price}</span>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Salamino"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={18}
      />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  let pizzariaState = "";

  if (isOpen) {
    pizzariaState = "We're currently open!";
  } else {
    pizzariaState = "Sorry, we're closed";
  }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} - {pizzariaState}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
