import React from 'react';
import './App.css';

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
            <img src="/images/ironhack-logo.svg" alt="" />
            <img src="/images/menu-top.svg " alt="" />

            {/*  We can specify the value of the component prop/attribute as a string 
            by referencing a variable:

              <img src={ihLogo} alt="" />
              <img src={menuBarImage} alt="" />
             
             */}
          </nav>

          <section className="content">
            <div>
              <h1>Say hello to ReactJS</h1>
              <p>
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer.
              </p>
              <button>Awesome!</button>
            </div>

            <div className="logo-panel">
              <img src={reactLogo} alt="" />
            </div>
          </section>
        </main>

        <section className="card-panel">
          <div className="card">
            <img src="/images/icon1.png" alt="" />
            {/*     OR  <img src="{icon1}" alt="" />   */}
            <h4 className="card-title">Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card">
            <img src="/images/icon2.png" alt="" />
            {/*     OR  <img src="{icon1}" alt="" />   */}
            <h4 className="card-title">Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card">
            <img src="/images/icon3.png" alt="" />
            {/*     OR  <img src="{icon1}" alt="" />   */}
            <h4 className="card-title">Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card">
            <img src="/images/icon4.png" alt="" />{' '}
            {/*     OR  <img src="{icon1}" alt="" />   */}
            <h4 className="card-title">Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </section>
      </div>
    );
  }
}

// Export the component using the ES6 export syntax
export default App;
