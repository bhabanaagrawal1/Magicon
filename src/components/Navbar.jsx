import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
  const confirmed = window.confirm("Are you sure you want to log out?");
  if (confirmed) {
    localStorage.removeItem("user");
    alert("You have been logged out successfully!");
    navigate("/");
  } else {
    alert("Logout cancelled.");
  }
};


  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-between items-center bg-black/5 backdrop-blur-md text-white fixed top-0 left-0 z-50 px-5 py-3">
        {/* Logo */}
        <p className="font-mono text-3xl md:text-5xl text-white ml-3 flex items-center">
          <i className="ri-magic-fill mr-2"></i> Magicon
        </p>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center items-center gap-10 text-white mr-10">
          <NavLink to="/home" className="hover:text-red-400">
            $ Home
          </NavLink>

          <NavLink to="/ManageBlogs" className="hover:text-red-400">
            $ Create Blogs
          </NavLink>

          <button
            onClick={logout}
            className="pt-[5px] pr-[13px] pb-[5px] pl-[13px] bg-gradient-to-r from-red-600 via-orange-600 to-yellow-300 rounded-2xl cursor-pointer hover:bg-gradient-to-br hover:from-yellow-600 hover:to-red-500 hover:scale-105 transition"
          >
            $ Logout
          </button>
        </div>

        {/* Hamburger Button (only visible on mobile) */}
        <button
          className="md:hidden text-white mr-3 z-[60]"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={23} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[250px] bg-black/5 backdrop-blur-lg flex flex-col items-start gap-6 py-6 px-6 md:hidden z-[55] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross Button inside sidebar */}
        <button
          className="text-white self-end mb-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Logo */}
        <p className="font-mono text-3xl text-white flex items-center mb-2">
          <i className="ri-magic-fill mr-2"></i> Magicon
        </p>

        {/* Links */}
        <NavLink
          to="/home"
          onClick={() => setIsOpen(false)}
          className="text-0.5xl hover:text-red-400 text-white"
        >
          Home
        </NavLink>

        <NavLink
          to="/ManageBlogs"
          onClick={() => setIsOpen(false)}
          className="text-0.5xl hover:text-red-400 text-white"
        >
          Create Blogs
        </NavLink>

        <button
          onClick={() => {
            setIsOpen(false);
            logout();
          }}
          className="text-0.5xl hover:text-red-400 text-white"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;