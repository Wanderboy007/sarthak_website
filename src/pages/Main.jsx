import React from "react";
import { FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <i className="fas fa-shopping-basket"></i> Zaykaa{" "}
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#products">products</a>
          <a href="#categories">categories</a>
          <a href="#review">review</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
          <FaBars className="icon" id="menu-btn" />
          <FaSearch className="icon" id="search-btn" />
          <FaShoppingCart className="icon" id="cart-btn" />
          <FaUser className="icon" id="login-btn" />
        </div>
        <form action="" className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" className="fas fa-search"></label>
        </form>

        <div className="shopping-cart">
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="img/Matar-Paneer-1.jpg" alt="" />
            <div className="content">
              <h3>Matar paneer</h3>
              <span className="price"> &#8377 60/-</span>
              <span className="quantity">qty : 1kg</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="img/ladyfinger.webp" alt="" />
            <div className="content">
              <h3> Fried - Bhindi</h3>
              <span className="price"> &#8377 40 /-</span>
              <span className="quantity">qty : 1kg</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="img/pneer.jpg" alt="" />
            <div className="content">
              <h3>paneer</h3>
              <span className="price"> &#8377 150/-</span>
              <span className="quantity">qty : 1kg</span>
            </div>
          </div>
          <div className="total"> total : &#8377 250/- </div>
          <a href="#" className="btn">
            checkout
          </a>
        </div>

        <form action="" className="login-form">
          <h3>login now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>
            forget your password <a href="#">click here</a>
          </p>
          <p>
            don't have an account <a href="#">create now</a>
          </p>
          <input type="submit" value="login now" className="btn" />
        </form>
      </header>

      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh and <span>organic</span> products for your
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero nostrum veniam facere tempore nisi.
          </p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>
      </section>

      {/* <!-- home section ends -->

<!-- features section starts  --> */}

      <section className="features" id="features">
        <h1 className="heading">
          {" "}
          our <span>features</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="image/feature-img-1.png" alt="" />
            <h3>fresh and organic</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src="image/feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src="image/feature-img-3.png" alt="" />
            <h3>easy payments</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>

      {/* <!-- features section ends -->

<!-- products section starts  --> */}

      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          our <span>products</span>{" "}
        </h1>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="image/product-1.png" alt="" />
              <h3>fresh orange</h3>
              <div className="price"> &#8377 20/- - 30/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="image/product-2.png" alt="" />
              <h3>fresh onion</h3>
              <div className="price"> &#8377 30/- - 40/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="image/product-3.png" alt="" />
              <h3>fresh meat</h3>
              <div className="price"> &#8377 160/- - 210/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="image/product-4.png" alt="" />
              <h3>fresh cabbage</h3>
              <div className="price"> &#8377 40/- - 50/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </div>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="image/product-5.png" alt="" />
              <h3>fresh potato</h3>
              <div className="price"> &#8377 40/- - 100/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="image/product-6.png" alt="" />
              <h3>fresh avocado</h3>
              <div className="price"> &#8377 90/- - 100/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="image/product-7.png" alt="" />
              <h3>fresh carrot</h3>
              <div className="price"> &#8377 80/- - 90/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>

            <div className="swiper-slide box">
              <img src="image/product-8.png" alt="" />
              <h3>green lemon</h3>
              <div className="price"> &#8377 45/- - 55/- </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- products section ends -->

<!-- categories section starts  --> */}

      <section className="categories" id="categories">
        <h1 className="heading">
          {" "}
          product <span>categories</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="image/cat-1.png" alt="" />
            <h3>vegitables</h3>
            <p>upto 45% off</p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src="image/cat-2.png" alt="" />
            <h3>fresh fruits</h3>
            <p>upto 45% off</p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src="image/cat-3.png" alt="" />
            <h3>dairy products</h3>
            <p>upto 45% off</p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src="image/cat-4.png" alt="" />
            <h3>fresh meat</h3>
            <p>upto 45% off</p>
            <a href="#" className="btn">
              shop now
            </a>
          </div>
        </div>
      </section>

      {/* <!-- categories section ends -->

<!-- review section starts  --> */}

      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          customer's <span>review</span>{" "}
        </h1>

        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="image/pic-1.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
              </p>
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-2.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
              </p>
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-3.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
              </p>
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-4.png" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.
              </p>
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="image/blog-1.jpg" alt="" />
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-user"></i> by user{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"></i> 1st may, 2022{" "}
                </a>
              </div>
              <h3>fresh and organic vegitables and fruits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <img src="image/blog-2.jpg" alt="" />
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-user"></i> by user{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"></i> 1st may, 2022{" "}
                </a>
              </div>
              <h3>fresh and organic vegitables and fruits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <img src="image/blog-3.jpg" alt="" />
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-user"></i> by user{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar"></i> 1st may, 2022{" "}
                </a>
              </div>
              <h3>fresh and organic vegitables and fruits</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>
              {" "}
              groco <i className="fas fa-shopping-basket"></i>{" "}
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              saepe.
            </p>
            <div className="share">
              <a target="_blank" href="#" className="fab fa-facebook-f">
                {" "}
              </a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> +917415192154{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> +918962315400{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-envelope"></i> Abhishekparihar@gmail.com{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Indore, india - 452001{" "}
            </a>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> home{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> features{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> products{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> categories{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> review{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-arrow-right"></i> blogs{" "}
            </a>
          </div>

          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email" />
            <input type="submit" value="subscribe" className="btn" />
            <img src="image/payment.png" className="payment-img" alt="" />
          </div>
        </div>

        <div className="credit">
          {" "}
          created by <span> mr. abhishek parihar </span> | all rights reserved{" "}
        </div>
      </section>
    </div>
  );
};

export default Main;
