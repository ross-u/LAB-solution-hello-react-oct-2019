import React from 'react';
import './App.css';
// Import the <Card> component class
import Card from './Card';
import Logo from './Logo';
import MainContent from './MainContent';
import MyComponent from './MyComponent';

// Image paths are going to be resolved by the browser making a request for each image
// And the webpack server serving each image from the "public" folder
// Therefore we specify them as endpoints (not as the paths in our system)
const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';

const ihLogo = '/images/ironhack-logo.svg';
const reactLogo = '/images/react-logo.svg';
const menuBarImage = '/images/menu-top.svg';

class App extends React.Component {
  /*  All class components MUST have the `render() {}` method.
  //  Syntax:

      render() {
         return();
      }

   */

  render() {
    return (
      <div className="App">
        <main>
          <nav>
            <Logo imageUrl={ihLogo} alt="" />
            <Logo imageUrl={menuBarImage} alt="" />

            {/*  We can specify the value of the component prop/attribute as a string 
            by referencing a variable:

              <img src={ihLogo} alt="" />
              <img src={menuBarImage} alt="" />
             
             */}
          </nav>

          <MyComponent city="Barcelona">
            <h2>Hello from the outside</h2>
          </MyComponent>

          <section className="content">
            <MainContent />

            <div className="logo-panel">
              <img src={reactLogo} alt="" />
            </div>
          </section>
        </main>

        <section className="card-panel">
          {/* Pass the data to the Card component by creating the props `cardImage` and `cardTitle` */}
          <Card cardImage={icon1} cardTitle="Declarative" />
          {/* OR

           <Card cardImage="/images/icon1.png" cardTitle="Declarative" /> */}

          <Card cardImage={icon2} cardTitle="Components" />

          <Card cardImage={icon3} cardTitle="Single-Way" />

          <Card cardImage={icon4} cardTitle="JSX" />
        </section>
      </div>
    );
  }
}

// Export the component using the ES6 export syntax
export default App;
