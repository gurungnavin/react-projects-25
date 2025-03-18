import PropTypes from "prop-types";

const ToggleButton = ({isOn, setIsOn}) => {

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 transition-all duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      />
    </button>
  );
};

// ✅ Define PropTypes
ToggleButton.propTypes = {
    isOn: PropTypes.bool.isRequired,  // isOn must be a boolean and required
    setIsOn: PropTypes.func.isRequired,  // setIsOn must be a function and required
  };
export default ToggleButton;
