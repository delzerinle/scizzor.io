import PropTypes from 'prop-types';

const ImageSelect = ({ title, imgSrc, className = '' }) => {
  return (
    <div className={className}>
      <div className="w-full p-2 bg-tertiary border-2 border-tertiary hover:border-primary">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover h-40 mx-auto mb-2"
        />
        <p className="text-xs text-center">{title}</p>
      </div>
    </div>
  );
};

ImageSelect.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ImageSelect;
