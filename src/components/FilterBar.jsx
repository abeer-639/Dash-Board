function FilterBar({ filter, onFilterChange }) {
  const filters = [
    { value: "all",       label: "all"        },
    { value: "active",    label: "not completed "   },
    { value: "completed", label: "completed"       },
  ];

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f.value}
          className={`filter-btn ${filter === f.value ? "active" : ""}`}
          onClick={() => onFilterChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
