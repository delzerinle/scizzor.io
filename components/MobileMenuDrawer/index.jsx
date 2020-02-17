import PropTypes from 'prop-types';

const MobileMenuDrawer = ({ isOpen, closeDrawer }) => {
  const wrapperClass = isOpen ? 'fixed' : 'hidden';

  return (
    <div
      data-testid="MobileMenuDrawer"
      className={`${wrapperClass} md:hidden bg-white h-full top-0 w-full max-w-xs flex flex-col z-20`}
    >
      <div className="px-5 flex justify-between items-center">
        <button
          onClick={closeDrawer}
          className="p-1 text-black focus:outline-none hover:text-primary focus:text-primary ease-linear duration-300 transition-colors"
        >
          <svg
            className="h-4 w-4 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 16.5l15-15M16.5 16.5l-15-15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <img className="h-16" src="/images/logo.png" alt="logo"></img>
      </div>
      <div className="px-5 flex-1 pt-6">
        <ul className="text-secondary font-light text-sm">
          <li className="text-alt-1 mb-4 flex justify-between items-center hover:text-alt-1">
            <a href="#">Home</a>
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.083 10.62a.462.462 0 000 .65c.178.178.465.178.643 0l5.19-5.244a.462.462 0 000-.649L1.727.134a.451.451 0 00-.643 0 .462.462 0 000 .65L5.817 5.7 1.083 10.62z" />
            </svg>
          </li>

          <li className="mb-4 flex justify-between items-center hover:text-alt-1">
            <a href="#">Shop</a>
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.083 10.62a.462.462 0 000 .65c.178.178.465.178.643 0l5.19-5.244a.462.462 0 000-.649L1.727.134a.451.451 0 00-.643 0 .462.462 0 000 .65L5.817 5.7 1.083 10.62z" />
            </svg>
          </li>

          <li className="mb-4 flex justify-between items-center hover:text-alt-1">
            <a href="#">How it Works</a>
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.083 10.62a.462.462 0 000 .65c.178.178.465.178.643 0l5.19-5.244a.462.462 0 000-.649L1.727.134a.451.451 0 00-.643 0 .462.462 0 000 .65L5.817 5.7 1.083 10.62z" />
            </svg>
          </li>

          <li className="flex justify-between items-center hover:text-alt-1">
            <a href="#">Join as a Brand</a>
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.083 10.62a.462.462 0 000 .65c.178.178.465.178.643 0l5.19-5.244a.462.462 0 000-.649L1.727.134a.451.451 0 00-.643 0 .462.462 0 000 .65L5.817 5.7 1.083 10.62z" />
            </svg>
          </li>
        </ul>
      </div>
      <button className="bg-tertiary px-5 py-2 flex justify-between items-center focus:outline-none text-secondary text-sm">
        <p>Account & Log in</p>

        <svg
          className="h-5 w-5 fill-current mr-4"
          strokeWidth="0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.72 5.824c0 2.06 1.701 3.744 3.78 3.744 2.079 0 3.78-1.685 3.78-3.744 0-2.06-1.701-3.744-3.78-3.744-2.079 0-3.78 1.685-3.78 3.744zm6.72 0c0 1.602-1.323 2.912-2.94 2.912s-2.94-1.31-2.94-2.912c0-1.602 1.323-2.912 2.94-2.912s2.94 1.31 2.94 2.912zM11.76 10.816H9.24c-4.179 0-7.56 3.349-7.56 7.488a.42.42 0 00.84 0c0-3.66 3.024-6.656 6.72-6.656h2.52c3.696 0 6.72 2.995 6.72 6.656a.42.42 0 00.84 0c0-4.14-3.381-7.488-7.56-7.488z" />
        </svg>
      </button>
    </div>
  );
};

MobileMenuDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default MobileMenuDrawer;
