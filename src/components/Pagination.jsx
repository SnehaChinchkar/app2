export default function Pagination({ filters, setFilters, totalCount }) {
  const totalPages = Math.ceil(totalCount / filters._limit);

  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        onClick={() =>
          setFilters({ ...filters, _page: Math.max(1, filters._page - 1) })
        }
        disabled={filters._page === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {filters._page} of {totalPages}</span>
      <button
        onClick={() =>
          setFilters({ ...filters, _page: filters._page + 1 })
        }
        disabled={filters._page >= totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
