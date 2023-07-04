import React from "react";

const  ProjectImageSmall = ({name, index}) => {
    return(
        <div className='column is-6-mobile is-3-tablet'>
            <div className='is-block'>
                <img
                    className='image is-cover'
                    style={{ height: 128, width: '100%' }}
                    src={`/images/${name}/${index}.png`}
                    alt='Product Image'
                />
            </div>
        </div>

    );
}

export default ProjectImageSmall;