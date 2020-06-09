import PropTypes from 'prop-types';

const AppointmentSummaryCard = ({ name, date, time, className = '' }) => (
  <div className={`mt-6 ${className} bg-white`}>
    <div className="shadow-custom-light p-4">
      <p className="text-sm font-medium">{name}</p>
      <div className="my-2">
        <span className="flex text-sm font-light">
          <svg
            className="w-5 h-4 mr-2 stroke-current"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.113 2.5H1.668c-.613 0-1.11.448-1.11 1v11c0 .552.497 1 1.11 1h14.445c.613 0 1.11-.448 1.11-1v-11c0-.552-.497-1-1.11-1zM.557 6.5h16.667M5.002 4V.5M12.78 4V.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{' '}
          {date}
        </span>
        <span className="mt-3 flex text-sm font-light">
          <svg
            className="w-5 h-5 mr-2 stroke-current"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 15.938a7.438 7.438 0 100-14.876 7.438 7.438 0 000 14.876zM8.5 8.5V5.844M8.5 8.5l3.32 3.32"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{' '}
          {time}
        </span>
      </div>

      <a href="#" className="text-xs sm:text-sm text-primary font-medium">
        View Measurement
      </a>
    </div>
  </div>
);

AppointmentSummaryCard.propTypes = {
  className: PropTypes.string,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AppointmentSummaryCard;
