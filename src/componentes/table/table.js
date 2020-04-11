import React from "react";
import data from "../Data/data.json";
import TableRow from "../table/components/tableRow";
import TableHeader from "./tableHeader/tableHeader";
import { EventContext } from "../table/tableContext";
import { TableContext } from "../table/tableContext";
import { AppContext } from "../../AppContext";

function Table() {
  const [sortBy, setSortBy] = React.useState();
//   const [sortOrder, setSortOrder] = React.useState();

const {searchText} = React.useContext(AppContext);

  // console.log(data)
  const handleTableHeaderClick = (event) => {
    const target = event.currentTarget;
    const id = target.getAttribute("data-id");
    setSortBy(id);

    console.log(id);
  };

  const tableContext = {
    sortBy,
    // sortOrder,
  };

  const eventContext = {
    onTableHeaderClick: handleTableHeaderClick,
  };


  let sortedData = [...data];
  if(searchText !== ''){
      sortedData = sortedData.filter(({email})=> new RegExp(searchText, 'g').test(email))
  }

  switch (sortBy) {
    case "Name":
        sortedData = sortedData.sort((a, b) => {
            const aName = `${a.name.first} ${a.name.last}`;
            const bName = `${b.name.first} ${b.name.last}`;
            return aName.localeCompare(bName)
        })
      break;

    case "Email":
        sortedData = sortedData.sort((a, b) => a.email.localeCompare(b.email))
      break;

    case "Phone":
        sortedData = sortedData.sort((a, b) => a.phone.localeCompare(b.phone))
      break;

    default:
      break;
  }

  return (
    <TableContext.Provider value={tableContext}>
      <EventContext.Provider value={eventContext}>
        <table border={1}>
          <thread>
            <tr>
              <TableHeader
                text="Name"
                // sort={}
              />
              <TableHeader text="Email" />
              <TableHeader text="Phone" />
            </tr>
          </thread>
          <tbody>
            <tr>
              {sortedData.map((person) => (
                <TableRow key={person.phone} person={person} />
              ))}
            </tr>
          </tbody>
        </table>
      </EventContext.Provider>
    </TableContext.Provider>
  );
}

export default Table;
