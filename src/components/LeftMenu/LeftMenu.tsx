import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const LeftMenuu = styled.div`
    width:250px;
    height:auto;
    margin-left:20px;
    margin-top:25px;
    display:block;
`;
const Ul = styled.ul`
   display:inline-block;
   width:100%;
   text-decoration: none;  
`;
const Li = styled.li`
    font-size:14px;
    color:rgb(37,46,73);
    font-weight:bold;
    margin-left:25px;
    padding:3px;
    cursor: pointer;
    img{
        width:27px;
        height:27px;
        padding-right:20px;
        padding-top:5px;
    }
    a{
        text-decoration: none;
        color:rgb(37,46,73);
    }
`;
export const LeftMenu: FC = () => {
    return(
        <LeftMenuu>
          <Ul>
                <Li>
                    <Link to='/ErrorPage'>
                        <img alt="Publication" src = '../../media/icons/publications.png'/>Publications 
                    </Link>
                </Li>
                <Li>
                    <Link to='/ErrorPage'>
                        <img alt="Ecosystem"src = '../../media/icons/ecosystem.png'/>Ecosystem 
                    </Link>
                </Li>
                <Li>
                    <Link to='/Entities'>
                        <img alt="Entities" src = '../../media/icons/entities2.png'/>Entities 
                    </Link>
                </Li>
          </Ul>
        </LeftMenuu>
    );
};