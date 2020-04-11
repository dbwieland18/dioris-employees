import React from "react";
import {EventContext} from "../tableContext";
import {TableContext} from "../tableContext";



function TableHeader(props) {
    const tableContext = React.useContext(TableContext);
    const eventContext = React.useContext(EventContext);
        // console.log(context)
    const {
        text	
    } = props;

    const {
        sortBy
    } = tableContext;
    
    return(
    <th
        data-id={text}
        onClick={eventContext.onTableHeaderClick}
    >
        
    {text}
    {sortBy === text && 'sorted'}
  </th>
    )
}

export default TableHeader