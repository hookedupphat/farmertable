import React, { useEffect, useState } from "react"
import DisplayTable from "./components/DisplayTable"
import Filters from "./components/Filters"

// Variables and state for filter 
const App = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectedState, setSelectedState] = useState("")
  const [name, setName] = useState("")
  const [isCrop, setisCrop] = useState(false)
  const [isSeed, setIsSeed] = useState(false)

  useEffect(() => {
    callAPI()
  }, [])

  useEffect(() => {
    filter()
  }, [name, selectedState, isCrop, isSeed])

// Fetch data from JSON file 
  const callAPI = () => {
    fetch("./data.json")
      .then((response) => response.json())
      .then(({ data }) => {
        setData(data)
        setFilteredData(data)
      })
  }
// Filter the data 
  const filter = () => {
    let filterd = data.filter(function (el) {
      return (
        (name ? el["city"].toUpperCase().includes(name.toUpperCase()) ||
          el["farmer_name"]
            .toUpperCase()
            .includes(name.toUpperCase()) : true ) &&
        (selectedState ? el["state"] === selectedState : true) &&
        (isSeed ? el["seed_purchases"] !== 0 : true) &&
        (isCrop ? el["cp_spend"] !== 0 : true)
      )
    })
    setFilteredData(filterd)
  }

// Display filter and table 
  return (
    <div className="container">
      <Filters
        setSelectedState={setSelectedState}
        setName={setName}
        setisCrop={setisCrop}
        setIsSeed={setIsSeed}
      />
      <DisplayTable data={filteredData} />
    </div>
  )
}

export default App
