import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Roboto', 'Malgun Gothic', '맑은 고딕', helvetica,
    'Apple SD Gothic Neo', sans-serif;
  }
`;

export default GlobalStyle;
