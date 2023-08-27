import styled, {css} from "styled-components";

type StyledPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}
export const StyledCard = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  //border: 2px solid pink;
  background-color: white;
  display: flex;
  flex-direction: column;

`

export const StyledImage = styled.div`

  //width: 280px;
  height: 170px;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;

  background-image: url(https://phonoteka.org/uploads/posts/2022-02/1643944594_31-phonoteka-org-p-pustinya-fon-dlya-fotoshopa-31.jpg);
  background-size: cover;

`

export const StyledHeading = styled.div`
  width: 70px;
  height: 19px;
  margin-left: 20px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 700;


`

export const StyledText = styled.text`
  width: 260px;
  height: 40px;
  margin: 20px;

  font-size: 12px;

`
export const StyledBox = styled.div`
  display: flex;
`
export const StyledButton = styled.button<StyledPropsType>`
  margin-left: 20px;
  margin-right: -10px;
  width: 86px;
  height: 30px;
 
  border-radius: 5px;
  border-color: cornflowerblue;
  background-color: cornflowerblue;
  color: white;


  ${props => props.outlined && css<StyledPropsType>`
    border: 2px solid ${props => props.color || "cornflowerblue"};
    color: ${props => props.color || "cornflowerblue"};
    background-color: transparent;
  `}

  ${props => props.primary && css<StyledPropsType>`
    background-color: ${props => props.color || "#7bd758"};
    color: snow;

  `}
`