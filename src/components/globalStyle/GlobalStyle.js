import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/zodiac1.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;  
    background-size: cover;
    color: #fff;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;
