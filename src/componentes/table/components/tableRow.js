import React from 'react';

function TableRow(props) {
	const {
        person	
	} = props;
     const {
        name,
        email,
        phone,
     } = person;   
	return (
		<tr>
			<td>{`${name.first} ${name.last}`}</td>
			<td>{email}</td>
			<td>{phone}</td>
			{/* <td>{nat}</td> */}
		</tr>
	)
}
export default TableRow