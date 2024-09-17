import React, { useState } from 'react';
import axios from 'axios';

const Approve = () => {
    const [filename, setFilename] = useState('');

  

    return (
        <div>
            <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                placeholder="Enter filename"
            />
            <button >Fetch File</button>
         
        </div>
    );
};

export default Approve;
