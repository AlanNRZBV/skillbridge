import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props extends React.PropsWithChildren {
  title: string;
  description: string;
  link: string;
}

const Section: FC<Props> = ({ title, description, link, children }) => {
  return (
    <section
      className={`container mx-auto mb-[3.125em] grid grid-cols-1 gap-y-[1.875em]`}
    >
      <div className="col-span-full flex flex-col gap-y-5 sm:flex-row sm:gap-x-[150px] sm:gap-y-0 lg:gap-x-[300px]">
        <div className="flex flex-col gap-y-1 lg:gap-y-[.375em]">
          <h3 className="text-[1.75rem] font-semibold capitalize text-dark-15 lg:text-5xl">
            {title}
          </h3>
          <span className="text-[.875rem] text-dark-35 lg:text-[1.125rem]">
            {description}
          </span>
        </div>
        <Link
          className="self-start text-nowrap rounded-md border border-light-95 bg-light-99 px-5 py-[.875em] sm:self-end lg:px-6 lg:py-[1.125em] lg:text-[1.125rem]"
          to={link}
        >
          View All
        </Link>
      </div>
      {children}
    </section>
  );
};

export default Section;
