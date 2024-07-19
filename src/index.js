import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/layouts/Header';
import Herosection from './components/homepage/Herosection';
import Homesectiontwo from './components/homepage/homesectiontwo';
import Homesectionthree from './components/homepage/Homesectionthree';
import Homesectionfour from './components/homepage/Homesectionfour';
import Homesectionfive from './components/homepage/Homesectionfive';
import Homesectionsix from './components/homepage/Homesectionsix';
import Homesectionseven from './components/homepage/Homesectionseven';
import Homesectioneight from './components/homepage/Homesectioneight';
import Footer from './components/layouts/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Header />
   <Herosection />
    <Homesectiontwo />
    <Homesectionthree />
    <Homesectionfour />
    <Homesectionfive />
    <Homesectionsix />
    <Homesectionseven />
    <Homesectioneight />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

