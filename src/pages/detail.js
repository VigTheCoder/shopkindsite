import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import ReactImageMagnify from 'react-image-magnify';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.find(product => product.slug === slug);
        if(findDetail){
            setDetail(findDetail);
            setMainImage(findDetail.images ? findDetail.images[0] : findDetail.image);
        } else {
            window.location.href = '/';
        }
    }, [slug]);

    const handleMinusQuantity = () => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    const handlePlusQuantity = () => setQuantity(quantity + 1);
    const handleAddToCart = () => {
        dispatch(addToCart({ productId: detail.id, quantity }));
    }

    if(!detail) return null;

    return (
        <div className="container mx-auto p-5">
            <h4 className='text-3xl text-center font-bold mb-5'>PRODUCT DETAILS</h4>
            <div className='grid grid-cols-12 gap-10'>
                {/* LEFT THUMBNAILS */}
                <div className='col-span-1 flex flex-col gap-3'>
                    {detail.images.map((img, index) => (
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
                <div className='col-span-5'>
                    <ReactImageMagnify 
                        {...{
                            smallImage: {
                                alt: detail.name,
                                isFluidWidth: true,
                                src: mainImage
                            },
                            largeImage: {
                                src: mainImage,
                                width: 1200,
                                height: 1200
                            },
                            lensStyle: { backgroundColor: 'rgba(0,0,0,.2)', cursor: 'crosshair' },
                            enlargedImageContainerDimensions: { width: '150%', height: '150%' } // smaller zoom
                        }} 
                    />
                </div>

                {/* PRODUCT INFO */}
                <div className='col-span-6 flex flex-col gap-5'>
                    <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
                    <p className='font-bold text-3xl'>${detail.price}</p>

                    {/* QUANTITY AND ADD TO CART */}
                    <div className='flex gap-5 mt-3'>
                        <div className='flex gap-2 justify-center items-center'>
                            <button 
                                className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'
                                onClick={handleMinusQuantity}
                            >-</button>
                            <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>
                                {quantity}
                            </span>
                            <button 
                                className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'
                                onClick={handlePlusQuantity}
                            >+</button>
                        </div>
                        <button 
                            className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                    </div>

                    {/* DESCRIPTION */}
                    <p className='mt-5'>{detail.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail;
