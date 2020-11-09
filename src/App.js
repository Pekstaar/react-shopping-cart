import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/filter';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component { 

  constructor() {
    super()
  
    this.state = {
       products: data.products,
       cartItems:localStorage.getItem("cartItems") ?
                 JSON.parse(localStorage.getItem("cartItems")) : [],
       size: "",
       sort: "",
    };
  }

  // proceeding order function
  createOrder = (order) =>{
    alert(`Need to save ${order.name}'s data` );
  }

  // delete item from cart method
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x=> x._id !== product._id),
    });    
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x=> x._id !== product._id))); 
  };

  // add product to cart for buying
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart=false;
    cartItems.forEach(item => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
  }

  sortProducts =(event)=>{
    //implementation
    
    const sort = event.target.value;

    // console.log(event.target.value);
    this.setState((state) => ({ 
        sort: sort,
        products: state.products
        .slice()
        .sort((a,b) => (
          sort === "lowest"?
          ((a.price > b.price)? 1: -1):
          sort ==="highest"?
          ((a.price < b.price)? 1:-1):
          a._id < b._id ? 1: -1
        ))
    }));
  };


  filterProducts = (event) => {
    //implementation
    // console.log(event.target.value);

    if (event.target.value ==="") {
      this.setState({size:event.target.value, products:data.products});
    } else {
      this.setState({
      size: event.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >=0 
        ),
    });
    }
  }

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

                <Filter 
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
                ></Filter>

                <Products products={this.state.products} 
                          addToCart ={this.addToCart}
                ></Products>
              </div>

              <div className="sidebar">
                <Cart 
                  // variables passed to props
                  cartItems={this.state.cartItems}
                  // Functions passed to props
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}
                ></Cart>
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
