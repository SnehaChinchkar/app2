import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/cars/${id}`)
      .then(res => res.json())
      .then(data => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (!car) return <div className="p-4">Car not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/" className="text-blue-500 underline">&larr; Back to Home</Link>
      <div className="mt-4 border rounded-lg p-6 shadow">
        <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded" />
        <h2 className="text-2xl font-bold mt-4">{car.name}</h2>
        <p className="mt-2 text-gray-600"><strong>Brand:</strong> {car.brand}</p>
        <p className="text-gray-600"><strong>Fuel Type:</strong> {car.fuel}</p>
        <p className="text-gray-600"><strong>Price:</strong> ${car.price}</p>
        <p className="text-gray-600"><strong>Seating Capacity:</strong> {car.seats}</p>
      </div>
    </div>
  );
}
