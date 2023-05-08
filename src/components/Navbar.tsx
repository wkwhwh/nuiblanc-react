import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        id="navigation"
        className="flex absolute top-0 right-0 mr-6 mt-6 text-right"
      >
        <ul id="navigation-items">
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                `${isActive && "bg-neutral-300"} text-neutral-700`
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`strata`}
              className={({ isActive }) =>
                `${isActive && "bg-neutral-300"} text-neutral-700`
              }
            >
              strata
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`wtmf`}
              className={({ isActive }) =>
                `${isActive && "bg-neutral-300"} text-neutral-700`
              }
            >
              when the machine fails
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
