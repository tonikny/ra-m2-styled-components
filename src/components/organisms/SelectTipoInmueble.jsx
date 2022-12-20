import React from 'react'
import { Select } from '../atoms'

const options = [
  { value: 'piso', label: 'Piso' },
  { value: 'chalet', label: 'Chalet' },
  { value: 'garage', label: 'Garage' },
]

function SelectTipoInmueble() {
  return <Select options={options} placeholder="Piso, chalet o garage ..." />
}

export default SelectTipoInmueble
