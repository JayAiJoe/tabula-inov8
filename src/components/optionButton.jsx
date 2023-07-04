import React from "react";

const OptionButton = ({value}) => {
    return(
        <div className='column is-4-touch is-4-desktop'>
            <button className='button has-background-white is-fullwidth has-text-weight-bold is-small'>
                {value}
            </button> 
        </div>

    );
}

export default OptionButton;