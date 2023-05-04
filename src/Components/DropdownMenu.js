import React from 'react'
import { DropdownButton, Dropdown} from "react-bootstrap";

function DropdownMenu() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Last 90 Days">
    <Dropdown.Item href="#/Company-Name-1">Last 70 Days</Dropdown.Item>
    <Dropdown.Item href="#/Company-Name-2">Last 50 Days</Dropdown.Item>
    <Dropdown.Item href="#/Company-Name-3">Last 30 Days</Dropdown.Item>
  </DropdownButton>
  )
}

export default DropdownMenu
