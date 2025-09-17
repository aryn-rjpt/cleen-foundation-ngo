import React, { useState } from "react";
import "../styles/Courses.css";
import coursesData from "./CoursesData/CoursesData";

const categories = [
  "Computer Science",
  "AI & ML",
  "Data Science",
  "Cloud",
  "Cyber Security",
  "Mathematics",
  "Management",
  "Humanities",
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const handleCategoryChange = (cat) => {
    setCurrentPage(1);
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };


  const clearFilters = () => {
    setSelectedCategories([]);
    setSearch("");
    setCurrentPage(1);
  };

  
  const removeFilterTag = (tag) => {
    if (tag === "search") {
      setSearch("");
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== tag));
    }
    setCurrentPage(1);
  };


  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category);

    return matchesSearch && matchesCategory;
  });

 
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const scrollContainer = document.querySelector(".courses-scroll");
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

 
  const getPaginationNumbers = () => {
    const range = [];
    const delta = 2;
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    range.push(1);
    if (left > 2) range.push("…");

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) range.push("…");
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  return (
    <section className="courses-page">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h3>Categories</h3>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
        <button className="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button>
      </aside>

   
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

     
      <div className="courses-main">
        {/* Top bar */}
        <div className="top-bar">
          <button
            className="hamburger"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open categories"
          >
            ☰
          </button>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={8}>8 per page</option>
            <option value={12}>12 per page</option>
            <option value={20}>20 per page</option>
          </select>
        </div>

        {/* Active filters */}
        <div className="active-filters">
          {search && (
            <span className="filter-tag">
              Search: "{search}"
              <button onClick={() => removeFilterTag("search")}>×</button>
            </span>
          )}
          {selectedCategories.map((cat) => (
            <span key={cat} className="filter-tag">
              {cat}
              <button onClick={() => removeFilterTag(cat)}>×</button>
            </span>
          ))}
        </div>

        {/* Courses grid */}
        <div className="courses-scroll">
          <div className="courses-grid">
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map((course) => (
                <div key={course.id} className="course-card premium-card">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-img"
                  />
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <p className="course-instructor">👨‍🏫 {course.instructor}</p>
                    <p className="course-duration">⏳ {course.duration}</p>
                    <p className="course-category">📚 {course.category}</p>
                    <button className="enroll-btn">Enroll Now</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No courses found.</p>
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="pagination" aria-label="Course pagination">
            <button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              aria-label="Go to first page"
            >
              « First
            </button>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              ‹ Prev
            </button>

            {getPaginationNumbers().map((num, i) =>
              num === "…" ? (
                <span key={`ellipsis-${i}`} className="ellipsis">
                  …
                </span>
              ) : (
                <button
                  key={`page-${num}`}
                  className={currentPage === num ? "active" : ""}
                  onClick={() => goToPage(num)}
                  aria-current={currentPage === num ? "page" : undefined}
                >
                  {num}
                </button>
              )
            )}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Go to next page"
            >
              Next ›
            </button>
            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Go to last page"
            >
              Last »
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Courses;
