import { footerLinks, icons } from "../constants";
import { Link, NavLink } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <div className="container mx-auto pt-[50px] ">
      <div className="flex flex-col gap-y-6 sm:flex-row sm:justify-between border-b border-light-95 md:pb-[30px] lg:pb-[50px]">
        <div className="flex flex-col gap-y-[30px] lg:gap-y-10">
          <NavLink to="/" className="mr-[50px] shrink-0">
            <img
              src={icons.mainMobile}
              alt="Skillbridge logo"
              className="w-10 lg:w-[44px] xl:w-[54px] h-auto"
            />
          </NavLink>
          <div className="flex flex-col gap-y-3 lg:gap-5">
            <div className="flex gap-x-[6px] items-center">
              <EnvelopeIcon className="text-dark-15 w-6 h-auto" />
              <Link
                to="mailto:hello@skillbridge.com"
                className="text-[15px] md:text-base lg:text-[18px]"
              >
                hello@skillbridge.com
              </Link>
            </div>
            <div className="flex gap-x-[6px] items-center">
              <PhoneIcon className="text-dark-15 w-6 h-auto" />
              <Link
                to="tel:+91 91813 23 2309"
                className="text-[15px] md:text-base lg:text-[18px]"
              >
                +91 91813 23 2309
              </Link>
            </div>
            <div className="flex gap-x-[6px] items-center">
              <MapPinIcon className="text-dark-15 w-6 h-auto" />
              <Link to="#" className="text-[15px] md:text-base lg:text-[18px]">
                Somewhere there
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6 sm:gap-6 md:gap-0 pb-5 md:grid-cols-3">
          {footerLinks.map((item, index) => (
            <div
              className="flex flex-col gap-y-[10px] lg:gap-y-[14px]"
              key={index}
            >
              <span className="font-semibold text-[18px] lg:text-xl text-dark-15">
                {item.title}
              </span>
              <div className="flex flex-col gap-y-2 text-[14px] md:text-base text-dark-35">
                {item.links.map((link) => (
                  <NavLink to={link.to}>{link.title}</NavLink>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col col-span-2 gap-y-[10px] lg:gap-y-[14px] md:col-auto">
            <span className="font-semibold text-[18px] lg:text-xl">
              Social Profiles
            </span>
            <div className="flex gap-x-[10px] md:gap-x-[14px]">
              <Link
                to="#"
                className="w-[44px] lg:w-[52px] h-auto bg-light-97 border border-light-95 rounded-[6px] flex items-center justify-center p-3"
              >
                <img src={icons.facebook} alt="Facebook link" />
              </Link>
              <Link
                to="#"
                className="w-[44px] lg:w-[52px] h-auto bg-light-97 border border-light-95 rounded-[6px] flex items-center justify-center p-3"
              >
                <img src={icons.twitter} alt="Twitter link" />
              </Link>
              <Link
                to="#"
                className="w-[44px] lg:w-[52px] h-auto bg-light-97 border border-light-95 rounded-[6px] flex items-center justify-center p-3"
              >
                <img src={icons.linkedin} alt="LinkedIn link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="text-[14px] lg:text-[18px] lg:mt-[50px] text-dark-40 mt-5 md:mt-[30px] pb-6 block text-center">
        © 2023 Skillbridge. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
