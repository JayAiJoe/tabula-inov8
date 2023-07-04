import React from "react";
import OptionButton from "./optionButton";

const OptionSet = ({name, options}) => {
    return(
        <div className='mb-12'>
                    <span className='mb-4 is-block has-text-grey has-text-weight-bold'>
                      {name.toUpperCase()}
                    </span>
                    <div className='columns is-mobile is-multiline'>
                        {options.map((option) => (
                            <OptionButton value={option}/>
                        ))}
                    </div>
                  </div>

    );
}

export default OptionSet;