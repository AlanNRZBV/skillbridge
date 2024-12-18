import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props extends React.PropsWithChildren {
  title: string;
  description: string;
  link: string;
}

const Section: FC<Props> = ({ title, description, link, children }) => {
  return (
    <div className="container mx-auto mb-[3.125em] grid grid-cols-1 gap-y-[1.875em] sm:grid-cols-2 sm:gap-[1.875em]">
      <div className="flex flex-col gap-y-5 sm:col-span-2">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-[1.75rem] font-semibold capitalize text-dark-15">
            {title}
          </h3>
          <span className="text-[.875rem] text-dark-35">{description}</span>
        </div>
        <Link
          className="self-start rounded-md border border-light-95 bg-light-99 px-5 py-[.875em]"
          to={link}
        >
          View All
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Section;
