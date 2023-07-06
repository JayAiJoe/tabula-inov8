import React, {useState} from "react";
import { TagsInput } from "react-tag-input-component";

const TagInputField = ({label}) =>{
    const [selected, setSelected] = useState([]);

    return(
        <div class="field mb-6">
            <label class="label is-medium">{label}</label>
                <div class="control">
                <TagsInput
                value={selected}
                onChange={setSelected}
                name="tags"
                placeHolder="Options"
                />
                </div>
        </div>
    );
}

export default TagInputField;