import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
          <img className="home__image"
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701521219.jpg"
            alt=""/>

         
            

        <div className="home__row">
            <Product
            id = "1"
            title = 'Psychedelics: Weve Been Lied To'
            image = 'https://images-na.ssl-images-amazon.com/images/I/316RIAZWZ3L._SX323_BO1,204,203,200_.jpg'            
            price = {20.99}
            rating = {4}
            />

            <Product
            id = "1"
            title = 'How to Change Your Mind: The New Science of Psychedelics'
            image = 'https://images-na.ssl-images-amazon.com/images/I/316RIAZWZ3L._SX323_BO1,204,203,200_.jpg'            
            price = {20.99}
            rating = {4}
            />
         

        </div>

        <div className="home__row">
            <Product
            id = "1"
            title = 'The Psychedelic Experience: A Manual Based on the Tibetan Book of the Dead '
            image = 'https://images-na.ssl-images-amazon.com/images/I/61IRwm6f6DL._SX324_BO1,204,203,200_.jpg'            
            price = {20.99}
            rating = {4}
            />

            <Product
            id = "1"
            title = 'Psychedelic: AN ADULT COLORING BOOK'
            image = 'https://images-na.ssl-images-amazon.com/images/I/518VA2qn7vL._SX384_BO1,204,203,200_.jpg'            
            price = {20.99}
            rating = {4}
            />

            <Product
            id = "1"
            title = 'The Psychedelic Explorers Guide: Safe, Therapeutic, and Sacred Journeys '
            image = 'https://images-na.ssl-images-amazon.com/images/I/51to85WlrxL._SX332_BO1,204,203,200_.jpg'            
            price = {20.99}
            rating = {4}
            />
        </div>

        <div className="home__row">
         

            <Product
            id = "1"
            title = 'How to Change Your Mind: The New Science of Psychedelics'
            image = 'https://images-na.ssl-images-amazon.com/images/I/51STUQ4LT8L._SX384_BO1,204,203,200_.jpg'            
            price = {20.99}
            rating = {4}
            />
         
            
         <Product
            id = "1"
            title = 'Psychedelic Healing: The Promise of Entheogens for Psychotherapy and Spiritual Development'
            image = 'https://images-na.ssl-images-amazon.com/images/I/51C5fyjL1AL._SX332_BO1,204,203,200_.jpg'            
            price = {20.99}
            rating = {4}
            />

         

        </div>
            
        

        </div>
    )
}

export default Home

// 