import React from 'react';
import Products from './components/Products';
import Filter from './components/filter';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {   

  render() {   
    return (
      <Provider store={store}>
        <div className="grid-container">

          {/* Header */}
          <header>
            <a href="/">React Shopping cart</a>
          </header>

          {/* body */}
          <main>
            <div className="content">
              <div className="main">

                <Filter ></Filter>

                <Products addToCart ={this.addToCart}
                ></Products>
              </div>

              <div className="sidebar">
                <Cart></Cart>
              </div>
            </div>
          </main>

          {/* footer */}
          <footer>All rights reserved!</footer>
        </div>
      </Provider>
    );
  }
}
  
export default App;
