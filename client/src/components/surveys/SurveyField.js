// logic to render label and text
import React from 'react';

export default ({ input,label }) => {

    return (
        <div>
        <label>
        {label}
        </label>
        <input {...input} />
        </div>
    );
};
