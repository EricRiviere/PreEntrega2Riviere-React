import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-gray50 flex justify-around p-3 shadow-md">
      <Link
        to={"/"}
        className="mt-2 mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
      >
        <h2>MAAP</h2>
      </Link>
      <nav className="pt-2">
        <NavLink
          to={"/category/new"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          New Season
        </NavLink>
        <NavLink
          to={"/category/man"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Man
        </NavLink>
        <NavLink
          to={"/category/woman"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Woman
        </NavLink>
        <NavLink
          to={"/category/accessories"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Accessories
        </NavLink>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
