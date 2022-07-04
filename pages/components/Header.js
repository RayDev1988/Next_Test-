import Link from "next/link";
const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src="/assets/blog/aurthor (2).jpeg" />
      </div>
      <div className="nav-item">
        <span>
          <Link href="/">Home</Link>
        </span>
        <span>
          <Link href="/episodes">Episodes</Link>
        </span>
        <span>
          <Link href="/season2">Season 2</Link>
        </span>
        <span>
          <Link href="/quotes">Quotes</Link>
        </span>
      </div>
    </nav>
  );
};
export default Header;
