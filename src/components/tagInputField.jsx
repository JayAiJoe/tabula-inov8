import React, {useState} from "react";
import { TagsInput } from "react-tag-input-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const TagInputField = ({label}) =>{
    const [selected, setSelected] = useState([]);

    const [visible, setVisible] = useState(true);

    const removeElement = () => {
        setVisible((prev) => !prev);
    };

    return(
        <>
        {visible && (
        <div className="field mb-6">
            <label className="label is-medium has-text-grey">{label} <FontAwesomeIcon onClick={removeElement} icon={faDeleteLeft} style={{fontSize:"1rem"}}/></label>
                <div className="control">
                <TagsInput
                value={selected}
                onChange={setSelected}
                name="tags"
                placeHolder="Options"
                style={{borderRadius:0}}
                />
                </div>
        </div>
        )}
        </>
    );
}

export default TagInputField;