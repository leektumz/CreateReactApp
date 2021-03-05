import '../App.css';
import React from 'react';
import CartWidget from './CartWidget'

function NavBar() {
  return (
  <div className="NavBar">
    
  <nav class="navbar navbar-expand-lg navbar-light bg-/light">
    <img src="/assets/logo.png" alt="" width="80px" height="80px"/>
  <a class="navbar-brand" href="#"> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse justify-content-center order-2" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hombre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mujer</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Poleras</a>
          <a class="dropdown-item" href="#">Pantalones</a>
          <a class="dropdown-item" href="#">Accesorios</a>
        </div>
      </li>
 </ul>
<CartWidget />
  </div> 
</nav>

    </div>
  );
}

export default NavBar;
