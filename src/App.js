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
            <a href="/" style={{ fontSize:"21px",fontStyle:"italic", fontWeight: "600"}}>Dressing corner</a>
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
          <footer> <span className="ref" style={{color:"cyan", fontSize:'16px', }}>@Pekstar-Coders::</span>&nbsp;&nbsp;All rights reserved </footer>
        </div>
      </Provider>
    );
  }
}
  
export default App;
