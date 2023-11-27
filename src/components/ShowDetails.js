import ShowItem from "./ShowItem"

function ShowDetails({details, type}) {
    let detailsDiv = "";
    if(type == 'computer'){
        detailsDiv = 
            <div>
                Last user: {details.detail1}
            </div>
    }
    else if(type == 'person' || type == 'person2'){
        detailsDiv = 
            <div>
                Position: {details.detail1}
            </div>
    }
    else if(type == 'list'){
        detailsDiv = 
            <div>
                Group Type: {details.detail1} <br/>
                Description: {details.detail2}<br/>
                Email: {details.details3}<br/>
            </div>
    }
    else if(type == 'group'){
        detailsDiv = 
            <div>
                Group Description: {details.detail1}
            </div>
    }
    else {
        detailsDiv = <div>No type found</div>
    }
    return (
        <div>
            {detailsDiv}
        </div>

    )
}

export default ShowDetails;