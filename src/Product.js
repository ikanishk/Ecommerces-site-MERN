import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({id, title, price, rating, image}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>£</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {
            Array(rating)
            .fill()
            .map((_)=>(
                <p>⭐</p>
            ))
        }
        </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Cart</button>
        </div> 
    )
}

export default Product








{/* <Card style={{ width: '18rem' }}>
        <div className="product">
        <Card.Img variant="top" src={image} alt="" />
           
                  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <div className="product_info">
            <p>{title}</p>
            <p className="product__">
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
            {
                Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))
            }
            </div>
            </div>
    </Card.Text>
  </Card.Body>

          
<button>Cart</button>
            </div>
            </Card> */}