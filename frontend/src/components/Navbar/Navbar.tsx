import TopBanner from "./TopBanner.tsx";
import { icons, paths } from "../../constants";
import { NavLink } from "react-router-dom";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <TopBanner />
      <div className="py-[14px] flex items-center justify-between">
        <NavLink to="/" className="mr-[50px] shrink-0">
          <img
            src={icons.mainMobile}
            alt="Skillbridge logo"
            className="w-10 lg:w-[44px] xl:w-[54px] h-auto"
          />
        </NavLink>
        <div className="hidden lg:flex items-center gap-x-[26px] text-[14px] text-dark-15 mr-auto xl:text-[18px]">
          {paths.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                !isActive
                  ? "py-3 px-5 rounded-[6px] hover:bg-light-95 transition duration-200"
                  : "py-3 px-5 rounded-[6px] bg-light-95 hover:bg-transparent transition duration-200"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="text-[14px] flex gap-x-5 xl:text-[18px] text-dark-15">
          <NavLink to="/sign-up" className="self-center">
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className="bg-primary-50 rounded-[6px] text-white py-2 px-5 md:py-4 md:px-9"
          >
            Login
          </NavLink>
          <button className="w-[34px] h-[34px] lg:hidden">
            <Bars3BottomRightIcon className="text-dark-15" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
