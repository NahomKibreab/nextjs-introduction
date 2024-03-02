import Link from "next/link";
import style from "../styles/nav-bar.module.css";
export const NavBar = () => {
  return (
    <ul className={style.navBarMain}>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  );
};
