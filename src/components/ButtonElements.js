import styled from "styled-components"

export const Button = styled.button`
  border-radius: 12px;
  background: ${({ primary }) => (primary ? "#3E84ED" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #fafafa;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  
  &:hover {
    transition: all 0.9 ease-out;
    background: ${({ primary }) => (primary ? "#0467FB" : "#3E84ED")};
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  `