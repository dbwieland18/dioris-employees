import React from "react";
import { AppContext } from "../../AppContext";
import { AppEventContext } from "../../AppContext";



function SearchInput() {
    const appContext = React.useContext(AppContext)
    const appEventContext = React.useContext(AppEventContext)
    return(
        <input  
            value={appContext.searchText}
            onChange={appEventContext.onSeachInputChange }
        />
    )
}

export default SearchInput;