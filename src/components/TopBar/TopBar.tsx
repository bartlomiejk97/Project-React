import { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Wrapper } from '../../styledHelpers/Components';
import { ExpandedMenu } from '../TopBar/ExpandedMenu';
import { Link } from 'react-router-dom';

const LogoImg = styled.div`
    img{
        width:45px;
        height:45px;
        padding-top:10px;
        padding-left:10px;
    }
`;
const Wrapper2 = styled(Wrapper)`
    padding:0;
    margin:0;
    width:auto;
    height:60px;
    background-color:white;
`;
const InnerWrapper = styled.div`
    
    width:100%;
    height:60px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
`;
const RightIcons = styled.div`
    text-align:right;
    margin-top:-40px;
    padding-right:15px;
    img{
        padding-right:15px;
        
    }     
`;
const InputWrapper = styled.div`
        display:flex;
        position: absolute;
        left:35%;
        top:1px;
        align-items:center;
        padding: 8px;
        img{
            transform: translateX(-50px);
        }
`;
const CustomImg = styled.img``;
const CustomInput = styled.input`
   width:600px;
   height:40px;
   padding-right:30px;
   border:1px solid lightgrey;
   color:lightgrey;
   border-radius:10px;
   text-align:center;
   font-size:15px;
   margin: 0 20px 0 0;
   &:hover{
       outline:none;
   }
   &:focus{
       outline:none;
   }
   img{
    transform: translateX(-50px);
   }
`;
const MenuWrapper = styled.div`
    width:auto;
    cursor:pointer;
    display:flex;
    position:relative;
`;
const LeftSide = styled.div`

    padding-top:20px;
    padding-left:15px;
    img.arrowDown{
        padding-left:150px;
        
    }
    img{
        vertical-align: middle;
    }
    span{
        font-family:'Arial';
        color:rgb(35,44,71);
        font-size:20px;
        padding-left:15px;
     
    }
`;
export const TopBar: FC = () => {

    const [wrapperRef, dropdownOpen, toggleDowndrop] = useDropdown();
    const menuHandler = () => {
        toggleDowndrop();
    }
    return (
        <Wrapper2>
            <InnerWrapper>
                <MenuWrapper ref={wrapperRef}>
                    <LogoImg>
                        <Link to="/">
                            <img src="../../media/icons/logo.png" alt="" />
                        </Link>
                    </LogoImg>
                    <LeftSide onClick={menuHandler}>
                        <img src="../../media/icons/house2.png" alt="" />
                        <span>Home</span>
                        <img className="arrowDown" src="../../media/icons/arrow-down.png" alt="" />
                    </LeftSide>

                    {dropdownOpen &&
                        <ExpandedMenu />
                    }
                </MenuWrapper>
                <InputWrapper>
                    <CustomInput type="text" placeholder='Search Legalcluster ' />
                    <img src="../../media/icons/search.png" alt="" />
                </InputWrapper>
                <RightIcons>
                    <CustomImg src='../../media/icons/house.png' />
                    <CustomImg src="../../media/icons/comments.png" />
                    <CustomImg src="../../media/icons/bell.png" />
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};
