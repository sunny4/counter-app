const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-scondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
