import PropTypes from 'prop-types';

const OrderItemCard = ({
  name,
  imgSrc,
  description,
  orderNumber,
  className = '',
}) => {
  return (
    <div className={`flex items-stretch md:flex-col ${className}`}>
      <div className="mr-4 w-32 flex-shrink-0 md:w-full md:mb-5">
        <img className="w-full h-full object-cover" src={imgSrc} alt="" />
      </div>
      <div className="flex-1">
        <h4 data-testid="name" className="text-xl leading-none">
          {name}
        </h4>
        <p data-testid="description" className="text-sm leading-5 my-3">
          {description}
        </p>
        <p className="text-sm leading-none">
          <span className="font-medium">Order No:</span> {orderNumber}
        </p>
        <div className="mt-4 sm:flex md:block">
          <button className="btn-alt-sm text-sm mb-3 sm:mr-2 sm:mb-0 md:mr-0 md:mb-3">
            <span className="-mx-4">View Order</span>
          </button>
          <button className="btn-alt-sm text-sm">
            <span className="-mx-4">Track Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

OrderItemCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  orderNumber: PropTypes.string.isRequired,
};

export default OrderItemCard;
