import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(stored);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(car => car.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Wishlist</h2>
        <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
      {wishlist.length === 0 ? (
        <p>No cars in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map(car => (
            <div key={car.id} className="relative">
              {/* <CarCard car={car} /> */}
              <CarCard car={car} showWishlistButton={false} />
              <button
                onClick={() => removeFromWishlist(car.id)}
                className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
