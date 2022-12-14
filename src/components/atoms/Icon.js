import styled from 'styled-components'
import { dimensions } from '../../styles';

const Icon = styled.span.attrs(({ iconName }) => ({
  children: iconName || 'help',
  className: 'material-symbols-rounded',
}))`
  font-size: ${({ size }) => size || dimensions.font.base};
  font-variation-settings: ${({ fill, wght, grad, opsz }) => `
      'FILL' ${fill || 1},
      'wght' ${wght || 400},
      'GRAD' ${grad || 0},
      'opsz' ${opsz || 48}
      `
  };
  background-color: cyan;
  border-radius: 4px;
  box-shadow: 0px 0px 3px gray inset;
  padding: 3px;
`;

export default Icon
