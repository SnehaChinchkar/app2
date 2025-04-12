export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {/* Brand filter */}
      <input
        type="text"
        placeholder="Brand"
        className="border p-2"
        value={filters.brand}
        onChange={e => setFilters({ ...filters, brand: e.target.value })}
      />
      
      {/* Fuel type filter */}
      <select
        className="border p-2"
        value={filters.fuel}
        onChange={e => setFilters({ ...filters, fuel: e.target.value })}
      >
        <option value="">All Fuels</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>

      {/* Price sort dropdown */}
      <select
        className="border p-2"
        value={filters.sort}
        onChange={e => setFilters({ ...filters, sort: e.target.value })}
      >
        <option value="">Sort by Price</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
}
