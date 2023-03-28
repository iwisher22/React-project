import React from 'react';
import{StyledH1,StyledCard,Styledpara,StyledIconBox} from './Styled';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';



const Card = (props) => {
  const navigate =  useNavigate ();
  console.log('props',props.data);
  return (
    <StyledCard>
        <StyledIconBox>
        <StyledH1>{props.data.title}</StyledH1>
        <Box onClick ={() =>navigate(props.data.route)}>
            {props.data.icon}
        </Box>
        </StyledIconBox>
        <Styledpara>{props.data.description}</Styledpara>
        
    </StyledCard>
  )
}

export default Card ;