import React from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const { id, name, price, images, slug } = props.data; // use 'images' array
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }

    return (
       <div className="p-2">
  <Link to={slug} className="block">
    <img
      src={images[0]}
      alt={name}
      className="w-full h-80 object-cover"
    />
  </Link>
  <div className="mt-2 text-center">
    <h3 className="text-base font-normal text-gray-900">{name}</h3>
    <p className="text-sm text-gray-700">${price}</p>
  </div>
  <div className="flex justify-center mt-2">
    <button
      className="px-4 py-1 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  </div>
</div>

    );
}

export default ProductCart;
