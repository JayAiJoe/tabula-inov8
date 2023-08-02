import React from "react";
import { PLACEHOLDER_IMAGE } from "../lib/utils";

const  ProjectImageSmall = ({src = ''}) => {
    return(
        <div className='column is-6-mobile is-3-tablet'>
            <div className='is-block'>
                <img
                    className='image is-cover'
                    style={{ height: 128, width: '100%' }}
                    src={src.length > 0 ? src : PLACEHOLDER_IMAGE}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = PLACEHOLDER_IMAGE;
                    }}
                />
            </div>
        </div>

    );
}

export default ProjectImageSmall;