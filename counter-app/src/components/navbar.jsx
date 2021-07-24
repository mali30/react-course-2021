const Navbar = ({ totalCounters, styles}) => {
    return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span
            style={{margin: 10}}
            className="badge badge-pilll badge-secondary"
          >
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
