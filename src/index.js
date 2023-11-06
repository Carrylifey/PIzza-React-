import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  ); // const styles={ color: "green", fontSize: 48 }
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numOfPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numOfPizzas > 0 ? (
        <React.Fragment>
          <p>Somne Nice Menu here to Fulfill YOUR Stomcach</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizzas pizzaDetalis={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Getting ready for your Empty Stomcach</p>
      )}

      {/* <Pizzas
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10  }
      />
      <Pizzas
        name="Pizza Funghi"
        ingredients="Tomat, Mushroooms"
        price="99"
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizzas({ pizzaDetalis }) {
  console.log(pizzaDetalis);
  // if (pizzaDetalis.soldOut) return null;
  return (
    <li className={`pizza ${pizzaDetalis.soldOut?'sold-out' :""}`}>
      <img src={pizzaDetalis.photoName} alt="Puu" />
      <div>
        <h3>{pizzaDetalis.name}</h3>
        <p>{pizzaDetalis.ingredients}</p>
        <span>{pizzaDetalis.soldOut ?"SOLD OUT" : pizzaDetalis.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (!isOpen)
  //   return (
  //     <p>
  //       We are Happy to Welcome you between {openHour}:00 and {closeHour}:00
  //     </p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are Happy to Welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open from{openHour}:00 Until {closeHour}:00.Come Visit us or
        Order Online
      </p>
      <button className="btn">Order</button>
    </div>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
