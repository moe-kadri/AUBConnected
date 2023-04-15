import React, { useState } from "react";
import Heading from "../../heading/Heading";
import "./style.css";

function PrevBase() {
  const [filters, setFilters] = useState({
    course: "",
    semester: "",
    year: "",
    professor: "",
  });
  const [previouses, setPreviouses] = useState([]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearch = () => {
    // TODO: Call your API to get the filtered previouses using the current filters
    // Example code:
    fetch("/api/previouses", {
      method: "POST",
      body: JSON.stringify(filters),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setPreviouses(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="previouses-section">
        <div className="prevbase">
            <Heading title="Apply the filters below and search for your previous!" />
        </div>
      <form>
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={filters.course}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Semester:
          <input
            type="text"
            name="semester"
            value={filters.semester}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Professor:
          <input
            type="text"
            name="professor"
            value={filters.professor}
            onChange={handleFilterChange}
          />
        </label>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
      {previouses.length > 0 ? (
        <ul>
          {previouses.map((previous) => (
            <li key={previous.id}>
              {/* TODO: Render the previous details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No previouses found.</p>
      )}
    </div>
  );
}


export default PrevBase;

