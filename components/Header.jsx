import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-16 flex-row items-center justify-between px-4">
      <Link href="/">
        <a className="hover:cursor-pointer">Blog example</a>
      </Link>

      <nav>
        <ul className="flex flex-row items-center justify-between space-x-4">
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
