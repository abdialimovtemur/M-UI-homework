import React from 'react'
import { Button, Link } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../../config/mui-config';


export const CustomButton = styled(Button)`
  background-color: ${theme.palette.secondary[400]};
  color: #ffff;
  padding: 12px 20px;
  font-weight: 700;
  display: inline-block;
  text-transform: none;

  &:hover{
    background-color: ${theme.palette.primary[900]}
  }
`;


export const CustomLinkButton = styled(Link)`
  color: ${theme.palette.primary.main};
  text-decoration: underline;
    
`;