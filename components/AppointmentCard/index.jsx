import PropTypes from 'prop-types';

const AppointmentCard = ({ address, date, time, dayCount, className = '' }) => {
  return (
    <div className={`border border-alt-2 ${className}`}>
      <div className="border-b border-alt-2 px-3 py-4">
        <p className="flex items-center w-56 max-w-full mb-3">
          <svg
            className="w-5 h-5 mr-3 stroke-current"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.113 2.5H1.668c-.613 0-1.11.448-1.11 1v11c0 .552.497 1 1.11 1h14.445c.613 0 1.11-.448 1.11-1v-11c0-.552-.497-1-1.11-1zM.557 6.5h16.667M5.002 4V.5M12.78 4V.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            data-testid="date"
            className="text-sm font-medium leading-none mr-6"
          >
            {date}
          </span>
          <span
            data-testid="dayCount"
            className="text-sm text-primary font-medium leading-none"
          >
            In {dayCount} days
          </span>
        </p>

        <p className="flex items-center w-56 max-w-full">
          <svg
            className="w-5 h-5 mr-3 stroke-current"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 15.938a7.438 7.438 0 100-14.876 7.438 7.438 0 000 14.876zM8.5 8.5V5.844M8.5 8.5l3.32 3.32"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span data-testid="time" className="text-sm font-medium leading-none">
            {time}
          </span>
        </p>
      </div>

      <div className="p-3 w-full flex items-start">
        <svg
          className="w-5 h-5 mr-3 stroke-current"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 10.3a.25.25 0 01.049.494.25.25 0 11-.049-.495z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 7.55a3 3 0 013 3c0 1.28-1.792 3.717-2.606 4.758a.501.501 0 01-.788 0c-.814-1.041-2.606-3.478-2.606-4.759a3 3 0 013-3zM10.499 15.355a7.503 7.503 0 115.846-8.88"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.193 15.28C6.178 13.794 5.5 11.09 5.5 8c0-3.089.678-5.792 1.693-7.28M1.517 7.5H9.5M3 3.5h12M2.365 11.5H8.5M10.807.72a11.36 11.36 0 011.54 4.783"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          data-testid="address"
          className="text-sm font-medium w-56 max-w-full"
        >
          {address}
        </span>
      </div>
    </div>
  );
};

AppointmentCard.propTypes = {
  className: PropTypes.string,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  dayCount: PropTypes.number.isRequired,
};

export default AppointmentCard;
