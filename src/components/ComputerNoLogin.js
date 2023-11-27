import { useState } from 'react';

import computerNoLogin from '../data/computerNoLogin';
import ShowItem from './ShowItem';

function ComputerNoLogin(){
    const [currentItem, setCurrentItem] = useState();
    const [showAllDetails, setShowAllDetails] = useState(false);
    const [hideNoDetailCards, setHideNoDetailCards] = useState(false);
    // const showDetails = (id) => {
    //     console.log("id in CNL was: ", id);
    //     setCurrentItem(id);
    //     console.log("current item was: ", currentItem);
    // }
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
                <div className="computer-list">
                {computerNoLogin.map((computer, index) => (
                    <ShowItem item={computer} key={index} itemType={'computer'} index={index} showAllDetails={showAllDetails} hideNoDetails={hideNoDetailCards}/>
                ))}
            </div>
                </div>
            </div>
        </div>
    );
}

export default ComputerNoLogin;