import styled from "styled-components";
const EditButton = styled.button `
display: inline-block;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #black;
  background-color: #grey;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  &:hover{
    background-color: black;
    color: white;
    border: 2px solid white;
    box-shadow: 5px 5px 0px black;
  }
  &:active{
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`
export default EditButton;