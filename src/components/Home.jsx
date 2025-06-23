import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const imageContainer = document.querySelector('.image-container');
  let isSwiping = false;
  let startX = 0;
  let scrollLeft = 0;

  imageContainer?.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) { // Detect two-finger touch
      isSwiping = true;
      startX = e.touches[0].pageX - imageContainer.offsetLeft;
      scrollLeft = imageContainer.scrollLeft;
    }
  });

  imageContainer?.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    e.preventDefault();
    const x = e.touches[0].pageX - imageContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust swipe sensitivity
    imageContainer.scrollLeft = scrollLeft - walk;
  });

  imageContainer?.addEventListener('touchend', () => {
    isSwiping = false;
  });

  const productContainer = document.querySelector('.product-container');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  const scrollAmount = 270;

  // Scroll left when left arrow is clicked
  leftArrow?.addEventListener('click', () => {
    productContainer?.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  });

  // Scroll right when right arrow is clicked
  rightArrow?.addEventListener('click', () => {
    productContainer?.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });

  useEffect(() => {
    // Initialize slick carousel
    const scriptSlick = document.createElement('script');
    scriptSlick.src = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
    scriptSlick.type = "text/javascript";
    document.body.appendChild(scriptSlick);

    scriptSlick.onload = () => {
      $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: true
            }
          }
        ]
      });
    };

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(scriptSlick);
    };
  }, []);

  useEffect(() => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu
    const toggleMobileMenu = () => {
      mobileMenu.classList.toggle('active');
    };

    hamburgerMenu?.addEventListener('click', toggleMobileMenu);

    // Cleanup the event listener
    return () => {
      hamburgerMenu?.removeEventListener('click', toggleMobileMenu);
    };
  }, []);

  useEffect(() => {
    const leftArrow = document.querySelectorAll('.arrow-left');
    const rightArrow = document.querySelectorAll('.arrow-right');
    const productContainer = document.querySelectorAll('.product-container');

    const scrollAmount = 270;

    const handleLeftArrowClick = () => {
      productContainer.forEach((element) => {
        element.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      });
    };

    const handleRightArrowClick = () => {
      productContainer.forEach((element) => {
        element.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      });
    };

    leftArrow.forEach((element) => {
      element.addEventListener('click', handleLeftArrowClick);
    });

    rightArrow.forEach((element) => {
      element.addEventListener('click', handleRightArrowClick);
    });

    // Cleanup event listeners
    return () => {
      leftArrow.forEach((element) => element.removeEventListener('click', handleLeftArrowClick));
      rightArrow.forEach((element) => element.removeEventListener('click', handleRightArrowClick));
    };
  }, []);

  return (
    <>
      <Helmet>
      
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    
        <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
      </Helmet>

 
        <header>
      <div classname="container-news-ticker">
        <div classname="ticker">
          <p>Offer for a limited Time 50% off on all products</p>
          <p>Buy Your Favorite Combo for half the price</p>
          <p>Shop Now to get 20% off on all Accessories</p>
          <p>Use Code BEAST40 to get 20% off on all Accessories</p>
        </div>
      </div>
      <nav classname="navbar">
        <div classname="nav-links" style="display: flex;flex-direction: row;gap: 28px;">
          <h2>Men</h2>
          <h2>Accessories</h2>
          <h2>Women</h2>
        </div>
        <div classname="nav-bar-menu">
          <div classname="hamburger-menu" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div classname="logo">
            <img src="images/mainlogo.png" alt="Logo"/>
          </div>
          <div classname="search">
            <i style="border: none; font-size: 22px;" classname="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i style="font-size: 22px;" classname="fa-regular fa-user"></i>
          </div>
          <div>
            <i style="font-size: 22px;" classname="fa-regular fa-heart"></i>
          </div>
        </div>
      </nav>
      <div classname="side-menu" id="side-menu">
        <div classname="side-menu-header">
          <button classname="close-btn" onclick="closeMenu()">×</button>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Mens</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Womens</a>
          </li>
        </ul>
      </div>
    </header>


       <div classname="slider">
      <div classname="slider-text">
        <img classname="gradient" src="images/one.jpeg" alt="Slide 1"/>
        <div classname="slide-text">
          <h5>WELCOME TO ONE HORN BEAST</h5>
          <h6>Walk Alone, Walk Strong ,Walk Bigger  Unleash Your Inner Beast</h6>
          <button classname="btn-getStarted">Get Started</button>
        </div>
      </div>
      <div>
        <img src="images/two.jpeg" alt="Slide 2"/>
        <div classname="slide-text">
          <h6>One Horn Beast Shop Has Everything You Need</h6>
          <button classname="btn-getStarted">Get Started</button>
        </div>
      </div>
      <div>
        <img src="images/four.jpeg" alt="Slide 4"/>
        <div classname="slide-text">
          <h6>We offer One to one Training</h6>
          <button classname="btn-getStarted">Get Started</button>
        </div>
      </div>
    </div>

  <div classname="image-section">
    <div>
      <img src="images/4.jpeg"/>
      <h2 style="padding-top: 95px;">Mens Collection</h2>
    </div>
    <div>
      <img src="images/imgtwo.jpeg"/>
      <h2 style="padding-top: 95px;">Accesories</h2>
    </div>
    <div>
      <img src="images/imgthree.jpeg"/>
      <h2 style="padding-top: 95px;">Womens Collection</h2>
    </div>
  </div>
  <div classname="intro-section">
    <img src="images/three.jpeg"/>
    <div classname="imageandtext"/>
      <h2>Welcome to One Horn Beast</h2>
      <p>
        We believe in the power of self-reliance and resilience, lessons that the world taught us during the unprecedented times of Covid-19.
     
        This period of isolation reminded us of a fundamental truth: we are born alone and, ultimately, we face our greatest challenges alone.
      
        Our journey began with a commitment to self-care and personal growth. In a world where physical connection was restricted,
      
        we discovered the importance of nurturing our bodies and minds. We embraced the idea that to uplift others, we must first empower ourselves.
      </p>
      <button classname="btn-getStarted">Get Started</button>
    </div>

  <div style="margin-bottom: -25px;padding-left: 70px;padding-top: 45px;">
    <h1 style="text-align: center; text-align: left;">Womens Collection</h1>
    <h2 style="text-align: center; font-weight: 200; text-decoration: underline; text-align: left;">See All</h2>
  </div>
 
  <div classname="product-flex">
    <div classname="product-slider">
   
      <div classname="arrow arrow-left">&#8592;</div>
    
      <div classname="product-container" style="display: flex; flex-direction: row; justify-content: space-evenly; gap: 20px;">
 
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/img1.jpg" classname="hover-img"/>
            <img src="images/img2.jpg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
         
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>Leggins</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
         
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/img2.jpg" classname="hover-img"/>
            <img src="images/imgthree.jpeg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
         
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>GYM Wear</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
        
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/shop.jpg" classname="hover-img"/>
            <img src="images/shop2.jpg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
     
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>Leggins</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
       
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div>
          <div classname="product-card">
            <div classname="product-image">
              <img src="images/shop2.jpg" classname="hover-img"/>
              <img src="images/shop1.jpg" classname="main-img"/>
              <div classname="wishlist">
                <i classname="fa-solid fa-heart"></i>
              </div>
            
              <div classname="size-options">
                <span classname="size-box">S</span>
                <span classname="size-box">M</span>
                <span classname="size-box">L</span>
                <span classname="size-box">XL</span>
                <span classname="size-box">XXL</span>
              </div>
            </div>
            <div classname="product-info">
              <h2>Leggins</h2>
              <p classname="product-price">$30.99</p>
            </div>
            <div classname="product-rating">
              <span classname="star">&#9733;</span>
              <span classname="star">&#9733;</span>
              <span classname="star">&#9733;</span>
              <span classname="star">&#9733;</span>
              <span classname="star">&#9734;</span>
            </div>
       
            <div classname="product-actions">
              <button classname="add-to-cart">
                <i classname="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/shop.jpg" classname="hover-img"/>
            <img src="images/model.jpeg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
          
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>Leggins</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
       
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    
      <div classname="arrow arrow-right">&#8594;</div>
    </div>
  </div>
  <div>
    <h1 style="text-align: center; padding-top: 20px;text-align: left;padding-left: 50px;">New Drop</h1>
    <h2 style="text-align: center; font-weight: 200;text-decoration: underline; text-align: left;padding-left: 50px;margin-top: -10px; margin-bottom: 10px;">See All</h2>
  </div>
  <div classname="new-drop-section">
    <div>
      <img width="200px" height="150px" src="images/model.jpeg"/>
    </div>
    <div>
      <img width="200px" height="150px" src="images/2.jpeg"/>
    </div>
    <div>
      <img classname="models" src="images/girlmodel.jpeg"/>
    </div>
  </div>
  <div style="margin-bottom: -25px;padding-left: 70px;padding-top: 45px; text-align: left;">
    <h1>Mens Collection</h1>
    <h2 style="font-weight: 200; text-decoration: underline;">See All</h2>
  </div>
  <div classname="product-flex">
    <div classname="product-slider">

      <div classname="arrow arrow-left">&#8592;</div>
 
      <div classname="product-container" style="display: flex; flex-direction: row; justify-content: space-evenly; gap: 20px;">
      
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/img1.jpg" classname="hover-img"/>
            <img src="images/img2.jpg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
     
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>Leggins</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
       
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/img2.jpg" classname="hover-img"/>
            <img src="images/imgthree.jpeg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
       
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>GYM Wear</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
         
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/shop.jpg" classname="hover-img"/>
            <img src="images/shop2.jpg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
          
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>Leggins</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
      
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div>
          <div classname="product-card">
            <div classname="product-image">
              <img src="images/shop2.jpg" classname="hover-img"/>
              <img src="images/shop1.jpg" classname="main-img"/>
              <div classname="wishlist">
                <i classname="fa-solid fa-heart"></i>
              </div>
          
              <div classname="size-options">
                <span classname="size-box">S</span>
                <span classname="size-box">M</span>
                <span classname="size-box">L</span>
                <span classname="size-box">XL</span>
                <span classname="size-box">XXL</span>
              </div>
            </div>
            <div classname="product-info">
              <h2>Leggins</h2>
              <p classname="product-price">$30.99</p>
            </div>
            <div classname="product-rating">
              <span classname="star">&#9733;</span>
              <span classname="star">&#9733;</span>
              <span classname="star">&#9733;</span>
              <span classname="star">&#9733;</span>
              <span classname="star">&#9734;</span>
            </div>
       
            <div classname="product-actions">
              <button classname="add-to-cart">
                <i classname="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div classname="product-card">
          <div classname="product-image">
            <img src="images/shop.jpg" classname="hover-img"/>
            <img src="images/model.jpeg" classname="main-img"/>
            <div classname="wishlist">
              <i classname="fa-solid fa-heart"></i>
            </div>
          
            <div classname="size-options">
              <span classname="size-box">S</span>
              <span classname="size-box">M</span>
              <span classname="size-box">L</span>
              <span classname="size-box">XL</span>
              <span classname="size-box">XXL</span>
            </div>
          </div>
          <div classname="product-info">
            <h2>Leggins</h2>
            <p classname="product-price">$30.99</p>
          </div>
          <div classname="product-rating">
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9733;</span>
            <span classname="star">&#9734;</span>
          </div>
        
          <div classname="product-actions">
            <button classname="add-to-cart">
              <i classname="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
   
      <div classname="arrow arrow-right">&#8594;</div>
    </div>
  </div>
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  <div classname="categories">
    <div>
      <h2>Mens Clothing</h2>
      <h3>Tank Tops</h3>
      <h3>Shorts</h3>
      <h3>Vest</h3>
      <h3>Tank Shorts</h3>
      <h3>Mens Short</h3>
    </div>
    <div>
      <h2>Womens Clothing</h2>
      <h3>Mens Clothing</h3>
      <h3>Tank Tops</h3>
      <h3>Shorts</h3>
      <h3>Vest</h3>
      <h3>Tank Shorts</h3>
      <h3>Mens Short</h3>
    </div>
    <div>
      <h2>Mens Joggers</h2>
      <h3>Mens Clothing</h3>
      <h3>Tank Tops</h3>
      <h3>Shorts</h3>
      <h3>Vest</h3>
      <h3>Tank Shorts</h3>
      <h3>Mens Short</h3>
    </div>
    <div>
      <h2>Mens Tanktops</h2>
      <h3>Mens Clothing</h3>
      <h3>Tank Tops</h3>
      <h3>Shorts</h3>
      <h3>Vest</h3>
      <h3>Tank Shorts</h3>
      <h3>Mens Short</h3>
    </div>
  </div>
  <div classname="parallax">
    <div classname="product-cta">
      <h3>Our New Summer Collection is Out Now.</h3>
      <button classname="cta-btn">SHOP NOW</button>
    </div>
  </div>
  <footer classname="footer">
    <div classname="footer-container">
      <div classname="footer-section about">
        <div classname="logo">
          <img width="180px" src="images/mainlogo.png" alt="Logo"/>
        </div>
      </div>
      <div classname="footer-section links">
        <h4>MENS PRODUCTS</h4>
        <ul>
          <li>
            <a href="#">Shorts</a>
          </li>
          <li>
            <a href="#">Stingers</a>
          </li>
          <li>
            <a href="#">Tank top</a>
          </li>
          <li>
            <a href="#">Vest</a>
          </li>
        </ul>
      </div>
      <div classname="footer-section links">
        <h4>WOMENS PRODUCTS</h4>
        <ul>
          <li>
            <a href="#">Leggins</a>
          </li>
          <li>
            <a href="#">Outer Wear</a>
          </li>
          <li>
            <a href="#">Gloves</a>
          </li>
          <li>
            <a href="#">shoes</a>
          </li>
        </ul>
      </div>
     
      <div classname="footer-section social">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="#" classname="facebook">Facebook</a>
          </li>
          <li>
            <a href="#" classname="twitter">Twitter</a>
          </li>
          <li>
            <a href="#" classname="instagram">Instagram</a>
          </li>
          <li>
            <a href="#" classname="linkedin">LinkedIn</a>
          </li>
        </ul>
      </div>
      
      <div classname="footer-section contact">
        <h4>Contact</h4>
        <ul>
          <li>+577 9827 3940</li>
          <li>onehornbeast@gmail.com</li>
          <li>123 Hongkong, Honkong City</li>
        </ul>
      </div>
    </div>
    <div classname="footer-bottom">
      <p>&copy; 2025 One Horn Beast. All Rights Reserved</p>
    </div>
  </footer>
    </>
  );
};

export default Home;
