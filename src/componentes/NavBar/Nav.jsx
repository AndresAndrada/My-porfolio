import styled from 'styled-components';

export const Nav = styled.vav`
    .conteiner {
      background-color: #222831;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .4rem;
      h2 {
          color: black;
          font-weight: bold;
      }
      .link {
          color: white;
          text-decoration: none;
          margin-right: 1rem;
      }
    }  
    
    .burguer {
        display: none;
        color: white;
    }
  
  @media(max-width: 768px) {
  .burguer {
      display: none;
      color: white;
  
  }
  }
    `;
