import React from "react";

const OptionButton = ({value, activeOption, setActiveOption}) => {

    

    const handleClick = () => {
        setActiveOption(value);
      };



    return(
        
        <div className='column is-4-touch is-4-desktop mb-0'>
            <button onClick={handleClick} 
            className={(activeOption === value ? "button is-white is-fullwidth has-text-weight-bold is-small" : "button is-light is-outlined is-fullwidth has-text-weight-bold is-small")}>
                {value}
            </button> 
        </div>

    );
}

export default OptionButton;