import '../App.css';
import React from 'react';

function ItemListContainer() {
  return(
    <div className="ItemListContainer"> 
     <section class="wrapper">
        <div class="container">
            <span class="arrow arrow-left">&#60;</span>
            <span class="arrow arrow-right">&#62;</span>

            <div class="d-flex">
               
                <div class="Card">
                    <div class="img__container">
                        <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="salad" class="card__img"/>
                    </div>
                    <p class="card__txt">Crispy Crouton Salad</p>
                </div>
                <div class="Card">
                    <img src="https://images.unsplash.com/photo-1544726982-b414d58fabaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="pancake" class="card__img"/>
                    <p class="card__txt">Pancakes</p>
                </div>
                <div class="Card">
                    <img src="https://images.unsplash.com/photo-1516919549054-e08258825f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="donuts" class="card__img"/>
                    <p class="card__txt">Crispy and Creamy  Doughnuts</p>
                </div>
                <div class="Card">
                    <img src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="pizza" class="card__img"/>
                    <p class="card__txt">Perfect Neapolitan Pizza</p>
                </div>
                <div class="Card">
                    <img src="https://images.unsplash.com/photo-1589627461407-6257b1acf0fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="pancakes" class="card__img"/>
                    <p class="card__txt">Pancakes with yogurt</p>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default ItemListContainer;