import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const getWishlist = () => JSON.parse(localStorage.getItem('wishlist')) || [];

export default function CarCard({ car, showWishlistButton = true }) {
  const [wishlist, setWishlist] = useState(getWishlist());

  const toggleWishlist = () => {
    const newWishlist = wishlist.some(c => c.id === car.id)
      ? wishlist.filter(c => c.id !== car.id)
      : [...wishlist, car];
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  return (
    <div className="w-72 border border-gray-300 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 bg-white">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">
        <Link to={`/car/${car.id}`} className="hover:underline">
          {car.name}
        </Link>
      </h3>
      <p>{car.brand} - ${car.price}</p>
      <p>{car.fuel} - {car.seats} Seats</p>

      {showWishlistButton && (
        <button
          onClick={toggleWishlist}
          className={`mt-2 px-3 py-1 rounded text-white ${
            wishlist.some(c => c.id === car.id) ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {wishlist.some(c => c.id === car.id)
            ? 'Remove from Wishlist'
            : 'Add to Wishlist'}
        </button>
      )}
    </div>
  );
}
