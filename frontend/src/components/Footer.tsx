import { footerLinks, icons } from "../constants";
import { Link, NavLink } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <div className="container mx-auto pt-[50px] bg-white">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-[30px]">
          <NavLink to="/" className="mr-[50px] shrink-0">
            <img
              src={icons.mainMobile}
              alt="Skillbridge logo"
              className="w-10 lg:w-[44px] xl:w-[54px] h-auto"
            />
          </NavLink>
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-[6px] items-center">
              <EnvelopeIcon className="text-dark-15 w-6 h-auto" />
              <Link to="mailto:hello@skillbridge.com" className="text-[15px]">
                hello@skillbridge.com
              </Link>
            </div>
            <div className="flex gap-x-[6px] items-center">
              <PhoneIcon className="text-dark-15 w-6 h-auto" />
              <Link to="tel:+91 91813 23 2309" className="text-[15px]">
                +91 91813 23 2309
              </Link>
            </div>
            <div className="flex gap-x-[6px] items-center">
              <MapPinIcon className="text-dark-15 w-6 h-auto" />
              <Link to="#" className="text-[15px]">
                Somewhere there
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-6 border-b border-b-light-95 pb-5">
          {footerLinks.map((item, index) => (
            <div className="flex flex-col gap-y-[10px]" key={index}>
              <span className="font-semibold text-[18px] text-dark-15">
                {item.title}
              </span>
              <div className="flex flex-col gap-y-[10px] text-[14px] text-dark-35">
                {item.links.map((link) => (
                  <NavLink to={link.to}>{link.title}</NavLink>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col col-span-2 gap-y-[10px]">
            <span className="font-semibold text-[18px]">Social Profiles</span>
            <div className="flex gap-x-[10px]">
              <Link
                to="#"
                className="w-[44px] h-auto bg-light-97 border border-light-95 rounded-[6px] flex items-center justify-center p-3"
              >
                <img src={icons.facebook} alt="Facebook link" />
              </Link>
              <Link
                to="#"
                className="w-[44px] h-auto bg-light-97 border border-light-95 rounded-[6px] flex items-center justify-center p-3"
              >
                <img src={icons.twitter} alt="Twitter link" />
              </Link>
              <Link
                to="#"
                className="w-[44px] h-auto bg-light-97 border border-light-95 rounded-[6px] flex items-center justify-center p-3"
              >
                <img src={icons.linkedin} alt="LinkedIn link" />
              </Link>
            </div>
          </div>
        </div>
        <span className="text-[14px] text-dark-40 mb-6">
          © 2023 Skillbridge. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
