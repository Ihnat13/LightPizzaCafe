import React, {Component} from 'react';
import '../../App.css';
import Pizza1 from '../../../img/pizza1.jpg';
import Pizza2 from '../../../img/pizza2.jpg';

const main = () => {
    return (
        <div>
      <div className="container my-5">
        <h1 className="text-center mb-4">Ласкаво просимо до Піца Кафе!</h1>
        <p className="lead text-center mb-4">Ми пропонуємо найкращі піци та каву у місті. Замовте вже зараз!</p>
      </div>
      
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Pizza1} class="d-block w-100" alt="Pizza 1"/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Пицца №1</h3>
        <p>Описание пиццы №1 и акций, связанных с ней.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Pizza2} class="d-block w-100" alt="Pizza 2"/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Пицца №2</h3>
        <p>Описание пиццы №2 и акций, связанных с ней.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
      </div>
    );
}


export default main
{/* <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Піца Кафе</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./App.css">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="img-fluid img-thumbnail" width="100" height="100" src="../burger/img/logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">Головна</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Меню</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Про нас</a>
          </li>
        </ul>
      </div>
        <a class="nav-link" href="#">Корзина</a>
    </div>
  </nav>

  <div class="container my-5">
    <!-- Содержимое главной страницы -->
    <h1 class="text-center mb-4">Ласкаво просимо до Піца Кафе!</h1>
    <p class="lead text-center mb-4">Ми пропонуємо найкращі піци та каву у місті. Замовте вже зараз!</p>
    <!-- Добавьте фотографии и текст акций -->
  </div>
  <div class="container my-5">
    <!-- Содержимое главной страницы -->
    <h1 class="text-center mb-4">Ласкаво просимо до Піца Кафе!</h1>
    <p class="lead text-center mb-4">Ми пропонуємо найкращі піци та каву у місті. Замовте вже зараз!</p>
    <!-- Добавьте фотографии и текст акций -->
  </div> <div class="container my-5">
    <!-- Содержимое главной страницы -->
    <h1 class="text-center mb-4">Ласкаво просимо до Піца Кафе!</h1>
    <p class="lead text-center mb-4">Ми пропонуємо найкращі піци та каву у місті. Замовте вже зараз!</p>
    <!-- Добавьте фотографии и текст акций -->
  </div> <div class="container my-5">
    <!-- Содержимое главной страницы -->
    <h1 class="text-center mb-4">Ласкаво просимо до Піца Кафе!</h1>
    <p class="lead text-center mb-4">Ми пропонуємо найкращі піци та каву у місті. Замовте вже зараз!</p>
    <!-- Добавьте фотографии и текст акций -->


  <footer class="bg-dark text-light py-4">
    <div class="container text-center">
      <p>© 2024 Піца Кафе. Усі права захищені.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> */}
