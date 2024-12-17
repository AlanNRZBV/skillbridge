import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";

const TopBanner = () => {
  const { pathname } = useLocation();

  const isOnCoursesPage = pathname === "/courses";

  return (
    <NavLink
      to="/courses"
      className={`bg-primary-50 text-[14px] text-white flex items-center py-[10px] px-4 rounded-[6px] justify-between mt-10 sm:gap-x-6 sm:justify-center sm:mt-5 xl:text-[18px] xl:py-[14px] ${isOnCoursesPage ? "hidden" : ""}`}
    >
      <span>Free Courses 🌟 Sale Ends Soon, Get It Now</span>
      <ArrowRightIcon className="w-5 h-5" />
    </NavLink>
  );
};

export default TopBanner;
