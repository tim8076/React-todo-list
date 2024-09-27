export default function TheHaeder({ activePage, setActivePage }) {
  return (
    <header className="header bg-primary">
      <nav className="container">
        <ul className="list-unstyled d-flex justify-content-between mb-0">
          <li>
            <button
              type="button"
              className={`header__link btn py-6 fs-md-1 ${
                activePage === "all" ? "activePage" : ""
              }`}
              onClick={() => setActivePage("all")}
            >
              My Tasks
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`header__link btn py-6 fs-md-1 ${
                activePage === "progress" ? "activePage" : ""
              }`}
              onClick={() => setActivePage("progress")}
            >
              In Progress
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`header__link btn py-6 fs-md-1 ${
                activePage === "completed" ? "activePage" : ""
              }`}
              onClick={() => setActivePage("completed")}
            >
              Completed
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
