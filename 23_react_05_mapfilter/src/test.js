import React, { useState } from "react";

function Table() {
  const [data, setData] = useState([
    { name: "John", age: 30, gender: "Male" },
    { name: "Jane", age: 25, gender: "Female" },
  ]);

  function handleInputChange(event, rowIndex, columnName) {
    const newData = [...data];
    newData[rowIndex][columnName] = event.target.value;
    setData(newData);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <input
                type="text"
                value={row.name}
                onChange={(event) => handleInputChange(event, rowIndex, "name")}
              />
            </td>
            <td>
              <input
                type="text"
                value={row.age}
                onChange={(event) => handleInputChange(event, rowIndex, "age")}
              />
            </td>
            <td>
              <input
                type="text"
                value={row.gender}
                onChange={(event) =>
                  handleInputChange(event, rowIndex, "gender")
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
