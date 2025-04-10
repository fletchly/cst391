import { Link } from "react-router-dom";
import { Search } from "../search/Search.tsx";

export function Navbar() {
  return (
    <div className={"sticky top-0 bg-white"}>
      <nav className={"text-xl p-2"}>
        <ul className={"flex flex-row flex-wrap justify-between items-center"}>
          <li
            className={
              "px-2 py-1 rounded-md hover:bg-gray-200 transition-colors"
            }
          >
            <Link to={"/"}>
              <i className="bx bx-note"></i>
            </Link>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </nav>
      <hr className="border-gray-200" />
    </div>
  );
}
