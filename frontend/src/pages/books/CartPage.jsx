import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8 sm:px-12">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Your Cart</h2>
                        <button
                            onClick={handleClearCart}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                        >
                            Clear Cart
                        </button>
                    </div>

                    <div className="mt-8">
                        {cartItems.length > 0 ? (
                            <ul className="space-y-6">
                                {cartItems.map((product) => (
                                    <li key={product._id} className="flex items-center space-x-4">
                                        <img
                                            src={getImgUrl(product.coverImage)}
                                            alt={product.title}
                                            className="w-24 h-24 rounded-lg object-cover shadow-lg"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                                </h3>
                                                <p className="text-gray-900 font-medium">${product.newPrice}</p>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1"><strong>Category:</strong> {product.category}</p>
                                            <div className="flex justify-between items-center mt-4">
                                                <p className="text-sm text-gray-500"><strong>Qty:</strong> 1</p>
                                                <button
                                                    onClick={() => handleRemoveFromCart(product)}
                                                    className="text-red-600 hover:text-red-500 font-medium"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-500">Your cart is empty. Start shopping!</p>
                        )}
                    </div>
                </div>

                <div className="border-t border-gray-200 px-6 py-8 sm:px-12">
                    <div className="flex justify-between items-center text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice || 0}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <Link
                            to="/checkout"
                            className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg hover:bg-indigo-700 transition-all"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-500">
                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
