

import PropTypes from 'prop-types';

const AHref = ({data, icon}) =>{
    return(
        <a href="" className="border border-indigo-400 px-6 py-2 rounded-3xl flex justify-center shadow-indigo-200 text-lg shadow-lg">
              {icon} <span className="pl-2">{data}</span>
            </a>
    )
  }
  // Adding prop types for validation
  AHref.propTypes = {
    data: PropTypes.string.isRequired,
    icon: PropTypes.element,
  };

  export default AHref;