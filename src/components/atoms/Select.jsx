import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectStyled = styled.select`
  margin-right: 1em;
  box-shadow: 1px 1px 5px ${({ shadowColor }) => shadowColor || 'grey'};
`

function Select({ options, placeholder }) {
  const [selectedOption, setSelectedOption] = useState()

  const handleChange = ({ target }) => {
    setSelectedOption(target.value)
  }
  useEffect(() => {
    // filter content
  }, [selectedOption])

  return (
    <SelectStyled defaultValue="default" onChange={handleChange}>
      <option value="default" disabled>
        {placeholder}
      </option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </SelectStyled>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Select
