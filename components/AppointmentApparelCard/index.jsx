import PropTypes from 'prop-types';

const AppointmentApparelCard = ({
  name,
  brand,
  imageSrc,
  apparelName,
  className = '',
}) => (
  <div className={`mt-8 ${className}`}>
    <img src={imageSrc} className="w-full mb-3 h-48 object-cover" alt="" />
    <p className="font-medium">
      <span className="text-secondary font-light">For </span> {name}
    </p>
    <p className="text-sm leading-6">{brand}</p>
    <p className="text-sm leading-6 mt-1">{apparelName}</p>
  </div>
);

AppointmentApparelCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  apparelName: PropTypes.string.isRequired,
};

export default AppointmentApparelCard;
