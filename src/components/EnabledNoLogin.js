import { useState } from 'react';


import enabledNoLogin90Days from '../data/enabledNoLogin';
import ShowItem from './ShowItem';

function EnabledNoLogin(){
    const [hideNoDetailCards, setHideNoDetailCards] = useState(false);
    const [showAllDetails, setShowAllDetails] = useState(false);

    const handleShowAllDetailsClick = (event) => {
        const button = event.currentTarget;
        button.classList.contains('checked-toggle') ? button.classList.remove('checked-toggle') : button.classList.add('checked-toggle');

        setShowAllDetails(!showAllDetails);
    }
    
    const handleHideNoDetails = (event) => {
        const button = event.currentTarget;
        button.classList.contains('checked-toggle') ? button.classList.remove('checked-toggle') : button.classList.add('checked-toggle');
        setHideNoDetailCards(!hideNoDetailCards);
    }
    return (
        <div className="container">
            <div id='detail-toggle' className='m-3 ' >
                <button className='btn btn-primary m-1' onClick={handleShowAllDetailsClick}>Details</button>
                <button className='btn btn-primary m-1' onClick={handleHideNoDetails}>Hide Blank Details</button>
            </div>
            <div className="row">
                <div className="col">
                <ul className="">
                {enabledNoLogin90Days.map((person, index) => (
                    <ShowItem item={person} key={index} itemType={'person2'} index={index} showAllDetails={showAllDetails} hideNoDetails={hideNoDetailCards} />

                    //<li className="btn btn-outline-dark m-1" key={index}>{person.name}</li>
                ))}
            </ul>
                </div>
            </div>
        </div>
    );
}

export default EnabledNoLogin;