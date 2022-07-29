import React, { useEffect, useState } from "react"

const DisplayTable = ({ data }) => {
  const [list, setList] = useState([])

// Sort names on click of column name
  const sortNames = event => {
    // Sort header onclick event
    console.log(event.target);
    
  };

  useEffect(() => {
    setList(data)
  }, [data])

// Display money in USD format with 2 decimal places
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

// loop to map and return JSON data 
  let tb_data = list.map((item) => {
    return (
      <tr key={item.id}>
        <td width="25%">{item.farmer_name}</td>
        <td width="10%">{item.city}</td>
        <td width="35%">{item.state}</td>
        <td width="15%" className="cp_spend">
          {dollarUS.format(item.cp_spend)}
        </td>
        <td width="15%" className="seed_bags">
          {item.seed_purchases}
        </td>
      </tr>
    )
  })
  
// Table header
  return (
    <div>
      <div>Results: {list.length}</div>
      <table className="table">
        <thead>
          <tr>
            <th className="hover" onClick={sortNames}>
              Farmer Name{" "}
              <img
                src="./down-arrow.png"
                width="15"
                height="15"
                alt="sort"
                >
              </img>
            </th>
            <th>City</th>
            <th>State</th>
            <th className="cp_spend">Crop Protection Spend</th>
            <th className="seed_bags">Seed (Bags)</th>
          </tr>
        </thead>
        <tbody>{tb_data}</tbody>
      </table>
    </div>
  )
}

export default DisplayTable
