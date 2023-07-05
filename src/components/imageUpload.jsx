import React from "react";

const ImageUpload = () => {
    return (
        <div className="file">
        <label className="file-label">
            <input className="file-input" type="file" name="resume"/>
            <span className="file-cta">
            <span className="file-icon">
                <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
                Choose a file…
            </span>
            </span>
        </label>
        </div>
    );
}

export default ImageUpload;