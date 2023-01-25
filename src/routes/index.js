import React from "react";
import {
  createBrowserRouter,
  Outlet,
  NavLink,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import RequiredAuth from "../auth/RequiredAuth";
import ErrorPage from "./error-pages";
import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: (
          <RequiredAuth>
            <Contact />
          </RequiredAuth>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function Home() {
  const activeStyle = {
    textDecoration: "none",
    color: "red",
  };
  return (
    <div>
      <div>Header page</div>
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts/1"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              User 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts/2"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              User 2
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function Contact() {
  const params = useParams();

  return <div>{`Contact page user ${params.contactId}`}</div>;
}

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");

    auth.login(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
