import React from 'react'
import { Select } from '../atoms'

const options = [
  { value: 'Mad', label: 'Madrid' },
  { value: 'Bcn', label: 'Barcelona' },
  { value: 'Zgz', label: 'Zaragoza' },
]

function SelectCiudad() {
  return (
    <Select options={options} placeholder="Madrid, Barcelona o Zaragoza ..." />
  )
}

export default SelectCiudad
