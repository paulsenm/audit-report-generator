import { useState } from 'react';

import ComputerNoLogin from './ComputerNoLogin';
import ShowDetails from './ShowDetails';

function ShowItem({item, itemType, showDetailsClick, index, showAllDetails, hideNoDetails}){
    console.log("Show all details was: ", showAllDetails);
    const [showDetails, setShowDetails] = useState(false);

    const itemName = item.name;
    const itemDetails = {
        detail1: item.detail1,
        detail2: item.detail2,
        detail3: item.detail3,
        detail4: item.detail4,
        detail5: item.detail5
    }
    let cardHeight = 'detail-card-1';
    if(itemType == 'list' || itemType == 'person2' || itemType == 'group'){
        cardHeight = 'detail-card-2';
    }
    console.log("Item type was: ", itemType);
    // const handleClick = (event) => {
    //     console.log("event.target.id was: ", event.currentTarget.id);
    //     setShowDetails(!showDetails);
    //     showDetailsClick(event.currentTarget.id);
    // }
    if(hideNoDetails){
        if(item.detail1 != '' && item.detail2 != '' && item.detail3 != ''){
            return(
                <div id={index}>
                    <div  className={`card m-1 custom-list-item ${item.detail1 !== '' ? 'has-details' : ''} ${showAllDetails ? `${cardHeight}`: ''}`}>
                        {itemName}
                        
                        {showAllDetails ? <ShowDetails details={itemDetails} type={itemType} /> : ''}
                    </div>
                </div>
            )
        }
    }
    else {
    return (
        <div id={index}>
            <div  className={`card m-1 custom-list-item ${item.detail1 !== '' ? 'has-details' : ''} ${showAllDetails ? `${cardHeight}`: ''}`}>
                {itemName}
                
                {showAllDetails ? <ShowDetails details={itemDetails} type={itemType} /> : ''}
            </div>
        </div>
    )}
}

export default ShowItem;