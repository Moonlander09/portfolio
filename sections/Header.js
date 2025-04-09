function Header() {
  return (
    <div className="flex justify-center items-center sticky top-3 z-20">
      <nav className="glass flex gap-1 p-0.5 ">
        <a href="#"  className="nav-list">
          <span className="border-b-1 border-transparent hover:border-[var(--text)] transition duration-300 ">Home</span>
        </a>
        <a href="#"  className="nav-list">
          <span className="border-b-1 border-transparent hover:border-[var(--text)] transition duration-300 ">Products</span>
        </a>
        <a href="#"  className="nav-list">
          <span className="border-b-1 border-transparent hover:border-[var(--text)] transition duration-300 ">About</span>
        </a>
        <a href="#"  className="nav-list">
          <span className="border-b-1 border-transparent hover:border-[var(--text)] transition duration-300">Contact</span>
        </a>
      </nav>
    </div>
  );
}

export default Header;
