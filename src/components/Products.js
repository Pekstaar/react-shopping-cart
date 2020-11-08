import React, { Component } from 'react';
import formatCurrency from '../util';
import Fade, { Zoom } from "react-reveal";
import Modal from 'react-modal';

class Products extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       product: null,
    }
  }

  openModal = (product) => {
    this.setState({product});
  };
  closeModal = (product) => {
    this.setState({product:null})
  }
  
  render() {
    const {product} = this.state; 
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
              {this.props.products.map(product =>(
                  <li key={product._id}>
                      <div className="product">
                          <a href={"#" + (product._id)} onClick={()=> this.openModal(product)}>
                              <img src={product.image} alt={product.title}></img>
                              <p>
                                  {product.title}
                              </p>
                          </a>
                          <div className="product-price">
                              <div>{formatCurrency(product.price)}</div>
                              <button onClick={()=> this.props.addToCart(product)} 
                              className="button primary">
                                Add to cart
                                </button>
                          </div>
                      </div>
                  </li>
              ))}
          </ul>
        </Fade>
        {product &&
        <Modal isOpen={true}  onRequestClose={this.closeModal}>
          <Zoom>
            <button onClick={this.closeModal} className="rounded close txt-white close-modal">
              <span>x </span>
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title}></img>
              <div className="product-details-description">
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>
                  {product.description}
                </p>

                <p>
                  Available sizes:{"  "}
                  {product.availableSizes.map(x => (
                  <span>{" "}
                    <button class="button txt-black ">{x}</button>
                  </span>
                 ))}
                </p>
                <div className="product-price">
                  <div>
                    {formatCurrency(product.price)}
                  </div>
                  <button className="button primary"  
                  onClick={()=>{
                    this.props.addToCart(product);
                    this.closeModal();  
                  }}> Add To cart</button>
                </div>
              </div>
            </div>
            <div>
            </div>
          </Zoom>
        </Modal>}
      </div>
    );
  }
}

export default Products;
