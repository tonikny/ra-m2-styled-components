import styled from 'styled-components'

const MenuList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  list-style: ${({ listStyle }) => listStyle || 'none'};
  li {
    margin-left: 5px;
  }
  a {
    text-decoration: none;
  }
`
export default MenuList