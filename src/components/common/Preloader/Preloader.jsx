import React from 'react';
import preloader from '../../../assets/images/Spinner.svg';

let Preloader = (props) => {
    return <div style={{ width: '200px', height: '200px'}}>
            <img src={preloader}/>
        </div>
}

export default Preloader;