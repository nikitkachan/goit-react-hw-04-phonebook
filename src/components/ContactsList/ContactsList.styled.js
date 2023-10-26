import { styled } from "styled-components";


export const StyledUl = styled.ul`
list-style: none;
padding-left: 0;
& li {
    margin-bottom: 10px;   
}
& i {
    margin-right: 10px;
}
`
export const Button = styled.button`
height: 30px;
padding-left: 20px;
padding-right: 20px;
margin-left: 20px;
border: 1px solid #555;
border-radius: 5px;
box-shadow: 0px 2px 9px -4px rgba(0,0,0,0.42);
background-color: white;
cursor: pointer;
text-transform: capitalize;
transition: border 250ms linear, background-color 250ms linear;

&:hover {
    border: 1px solid #0088ff;
    background-color: #0088ff;
    color: white;

}
`