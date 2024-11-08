import PropTypes from 'prop-types';

const ClickButton = ({data, icon, background}) => {
  return (
    <button className={`flex font-bold ${background} mx-2 px-8 py-4 rounded-xl`}>
      <span className="pr-2">{data}</span>
      {icon}
    </button>
  )
}

ClickButton.propTypes = {
  data: PropTypes.string.isRequired,
  icon: PropTypes.element,
  background: PropTypes.string
};

export default ClickButton
//text-white bg-indigo-600 