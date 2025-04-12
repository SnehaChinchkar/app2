import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCars } from '../services/fetchapi';
import FilterBar from '../components/FilterBar';
import CarCard from '../components/CarCard';
import Pagination from '../components/Pagination';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({ brand: '', fuel: '', _page: 1, _limit: 10, sort: '' });
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    const { brand, fuel, _page, _limit, sort } = filters;
    let query = '';
    if (fuel) query += `?fuel=${fuel}`;

    fetch(`http://localhost:3001/cars${query}`)
      .then(res => res.json())
      .then(data => {
        let filtered = data;

        // Filter by brand
        if (brand.trim()) {
          filtered = filtered.filter(car =>
            car.brand.toLowerCase().includes(brand.toLowerCase())
          );
        }

        // Sort by price 
        if (sort) {
          filtered = filtered.sort((a, b) => {
            if (sort === 'asc') {
              return a.price - b.price;  
            }
            return b.price - a.price; 
          });
        }

        const start = (_page - 1) * _limit;
        const paginated = filtered.slice(start, start + _limit);

        setCars(paginated);
        setTotalCount(filtered.length);
      })
      .catch(err => {
        console.error("Failed to fetch cars:", err);
        setCars([]);
      })
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Car Listings</h1>
        <Link
          to="/wishlist"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Wishlist
        </Link>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-stretch mt-10">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}

      <Pagination filters={filters} setFilters={setFilters} totalCount={totalCount} />
    </div>
  );
}
