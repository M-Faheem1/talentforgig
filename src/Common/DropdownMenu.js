import React from 'react'
import { DropdownButton, Dropdown} from 'react-bootstrap';

function DropdownMenu() {
  return (
    <DropdownButton title="Last 90 Days">
    <Dropdown.Item> Last 70 Days </Dropdown.Item>
    <Dropdown.Item> Last 50 Days </Dropdown.Item>
    <Dropdown.Item> Last 30 Days </Dropdown.Item>
  </DropdownButton>
  )
}

export default DropdownMenu
