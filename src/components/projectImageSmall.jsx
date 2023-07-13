import React from "react";
import { PLACEHOLDER_IMAGE } from "../lib/utils";

const  ProjectImageSmall = ({name, index}) => {
    return(
        <div className='column is-6-mobile is-3-tablet'>
            <div className='is-block'>
                {
                    name.length > 0 && 
                    <img
                        className='image is-cover'
                        style={{ height: 128, width: '100%' }}
                        src={`/images/${name}/${index}.png`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = PLACEHOLDER_IMAGE;
                        }}
                        alt='Product Image'
                    />
                }
                {
                    name.length == 0 &&
                    <img
                        className='image is-cover'
                        style={{ height: 128, width: '100%' }}
                        src={PLACEHOLDER_IMAGE}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = PLACEHOLDER_IMAGE;
                        }}
                        alt='Product Image'
                    />
                }
            </div>
        </div>

    );
}

export default ProjectImageSmall;