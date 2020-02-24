import PropTypes from 'prop-types';

const FormErrorMessage = ({ children }) => (
    <div className="border-2 rounded-sm border-red-400 p-2 w-full font-thin text-red-600 text-center bg-orange-100">
        {children}
    </div>
);

FormErrorMessage.propTypes = {
    children: PropTypes.node.isRequired
};

export default FormErrorMessage;
