import Link from 'next/link';
import PropTypes from 'prop-types';

const BackToPage = ({ link = '#', title, className = '' }) => (
  <Link href={link}>
    <a className={`inline-flex items-center pt-1 ${className}`}>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 stroke-current text-secondary mr-2"
      >
        <circle cx="9" cy="9" r="8.5" />
        <path
          d="M12.6 9H5.4M8.1 11.7L5.4 9l2.7-2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-primary font-medium text-sm">{title}</p>
    </a>
  </Link>
);

BackToPage.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BackToPage;
