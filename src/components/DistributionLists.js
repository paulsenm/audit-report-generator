import { useState } from 'react';


import distributionLists from '../data/distributionLists';
import ShowItem from './ShowItem';


function DistributionLists(){
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
                {distributionLists.map((list, index) => (
                    <ShowItem item={list} key={index} itemType={'list'} index={index} showAllDetails={showAllDetails} hideNoDetails={hideNoDetailCards} />
                    //<li className="btn btn-outline-dark m-1" key={index}>{list.listName}</li>
                ))}
            </ul>
                </div>
            </div>
        </div>
    );
}

export default DistributionLists;