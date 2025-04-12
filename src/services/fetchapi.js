const BASE_URL = 'http://localhost:3001';

export const fetchCars = async (filters = {}) => {
  const params = new URLSearchParams(filters);
  const res = await fetch(`${BASE_URL}/cars?${params}`);
  if (!res.ok) throw new Error('Failed to fetch cars');
  return res.json();
};
