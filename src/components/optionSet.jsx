import React, {useState} from "react";
import OptionButton from "./optionButton";

const OptionSet = ({name, options}) => {
    const [activeOption, setActiveOption] = useState("");

    return(
        <div className='mb-4'>
                    <span className='mb-2 is-block has-text-grey has-text-weight-bold'>
                      {name.toUpperCase()}
                    </span>
                    <div className='columns is-mobile is-multiline'>
                        
                        {options.map((option) => (
                            <OptionButton value={option.value} activeOption={activeOption} setActiveOption={setActiveOption}/>
                        ))}
                    </div>
        </div> 

    );
}

export default OptionSet;