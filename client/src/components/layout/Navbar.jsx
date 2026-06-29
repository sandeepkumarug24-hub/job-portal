import { Link, NavLink } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import Button from "../ui/Button";
import Container from "../common/Container";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <BriefcaseBusiness className="text-indigo-600" size={30} />
            <h1 className="text-2xl font-bold">
              Job<span className="text-indigo-600">Portal</span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600 transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600 transition"
              }
            >
              Jobs
            </NavLink>

            <NavLink
              to="/browse"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600 transition"
              }
            >
              Browse
            </NavLink>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50">
              Login
            </Button>

            <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
              Signup
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
