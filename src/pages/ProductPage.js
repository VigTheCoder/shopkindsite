// src/pages/ProductPage.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { chocolates } from '../data/chocolates';
import { cookies } from '../data/cookies';
import { icecreams } from '../data/icecreams';
import { chips } from '../data/chips';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import ReactImageMagnify from 'react-image-magnify';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const allProducts = [...chocolates, ...cookies, ...icecreams, ...chips];

const ProductPage = () => {
  const { category, slug } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [alsoSearched, setAlsoSearched] = useState([]);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  useEffect(() => {
    let dataset = [];
    if (category === 'chocolates') dataset = chocolates;
    else if (category === 'cookies') dataset = cookies;
    else if (category === 'icecreams') dataset = icecreams;
    else if (category === 'chips') dataset = chips;

    const foundProduct = dataset.find(item => item.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0]);
      const otherProducts = allProducts.filter(p => p.slug !== slug);
      setAlsoSearched(otherProducts.sort(() => 0.5 - Math.random()).slice(0, 12));
    } else {
      navigate('/');
    }
  }, [category, slug, navigate]);

  const handleMinusQuantity = () => setQuantity(q => Math.max(1, q - 1));
  const handlePlusQuantity = () => setQuantity(q => q + 1);

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: product.id, category, quantity }));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  if (!product) return null;

  return (
    <div className="container mx-auto p-4 md:p-5">
      <div className="grid grid-cols-12 gap-5 md:gap-10">

        {/* LEFT THUMBNAILS */}
        <div className="hidden md:flex md:col-span-1 flex-col gap-3">
          {product.images.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className="w-20 h-20 cursor-pointer object-cover border border-gray-200"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="col-span-12 md:col-span-5">
          <ReactImageMagnify 
            {...{
              smallImage: { alt: product.name, isFluidWidth: true, src: mainImage },
              largeImage: { src: mainImage, width: 1200, height: 1200 },
              enlargedImageContainer: '#enlarged-image-portal',
              enlargedImageContainerStyle: { zIndex: '9999' }
            }} 
          />
        </div>

        {/* PRODUCT INFO */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-3 mt-5 md:mt-0">
          <h4 className="text-2xl font-bold mb-1">PRODUCT DETAILS</h4>
          <h2 className="text-xl font-semibold uppercase">{product.name}</h2>
          <p className="font-semibold text-xl">${product.price.toFixed(2)}</p>

          {/* QUANTITY CONTROLS */}
          <div className="flex gap-5 mt-3 items-center flex-wrap">
            <div className="flex gap-2 justify-center items-center">
              <button 
                className="bg-gray-100 w-10 h-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
              >-</button>
              <span className="bg-gray-200 w-10 h-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button 
                className="bg-gray-100 w-10 h-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >+</button>
            </div>
          </div>

          {/* ADD TO CART BUTTON */}
          <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-3 rounded-xl shadow-2xl mt-2 w-full md:w-1/2 relative flex justify-center items-center transition
              ${added ? 'bg-gray-300 text-gray-800 cursor-default' : ''}`}
            onClick={handleAddToCart}
            disabled={added}
          >
            {added && (
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-600 font-bold text-lg">
                ✓
              </span>
            )}
            {added ? 'Added' : 'Add To Cart'}
          </button>

          {/* DESCRIPTION */}
          <p className="mt-5 text-gray-900 text-base leading-relaxed">{product.description}</p>

          {/* CUSTOMERS ALSO SEARCHED */}
          {alsoSearched.length > 0 && (
            <div className="mt-10 relative">
              <h4 className="text-xl font-bold mb-4">Customers also searched</h4>

              {/* Carousel nav buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center justify-between w-full pointer-events-none">
                <button 
                  onClick={scrollLeft} 
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100 pointer-events-auto transition"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={scrollRight} 
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100 pointer-events-auto transition"
                >
                  <FaChevronRight />
                </button>
              </div>

              <div ref={carouselRef} className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar">
                {alsoSearched.map(item => (
                  <Link
                    key={item.slug}
                    to={`/category/${item.category}/${item.slug}`}
                    className="flex-shrink-0 w-40 bg-white border border-gray-200 rounded-lg p-2 hover:shadow-md transition"
                  >
                    <img src={item.images[0]} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
