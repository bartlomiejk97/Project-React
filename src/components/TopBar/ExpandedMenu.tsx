import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    border-radius:10px;
    border:1px solid lightgrey;
    position:absolute;
    z-index:999;
    width:210px;
    top:55px;
    left:75px;
    background:white;
    padding:16px;
`;
const Menu = styled.div`
    width:auto;
`;
const InputExpanded = styled.input`
        
        margin-top:5px;
        margin-bottom:5px;
        width:200px;
        height:20px;
        border:1px solid lightgrey;
        color:lightgrey;
        border-radius:4px;
        font-size:12px;
        &:hover{
       outline:none;
        }
        &:focus{
       outline:none;
        }
`;
const H1 = styled.h1`
    margin:6px 6px;
    font-weight:bold;
    color:rgb(135,139,145);
    font-size:12px;
`;
const Ul = styled.ul`
    color:rgb(35,44,71);
    font-size:13px;
    padding-bottom:10px;
    
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color:rgb(35,44,71);
`;
const Li = styled.li`
    padding-left:3px;
    margin-top:4px;
`;
const Span = styled.span`
    img.arrowDown{
        padding-left:90px;
    }
    img{
        vertical-align: middle;
    }
    span{
        font-family:'Arial';
        color:rgb(35,44,71);
        font-size:14px;
        padding-left:15px;
     
    }
`;
const UserList = styled.div`
    display: block;
    span{
        margin:6px 6px;
        font-weight:bold;
        color:rgb(135,139,145);
        font-size:12px;
    }
`;
const AccountItem = styled.div`
`;
const UserImg = styled.img`
    display: inline-block;
    margin-top: 15px;
    width:35px;
    height: 35px;
    border-radius: 50%;
`;
const NameUser = styled.div`
    display: inline-block;
    color: black;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 15px;
    margin-left:10px;
    padding-top: -10px;
`;
const Description = styled.div`
    color: black;
    font-size: 12px;
    font-weight: 100;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-left: 35px;
`;
const LogOutButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;
const CustomImg = styled.img`
    width:20px;
    height:20px;
    margin-right:5px;
`;
const Scroll = styled.div`
    overflow: scroll;
    max-height:200px;
`;



export const ExpandedMenu: FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    
    return (
        <Wrapper>
            <Menu>
                <Span>
                    <img src='../../media/icons/entities2.png' alt=""></img>
                    <span>Corporate</span>
                    <img className="arrowDown" src="../../media/icons/arrow-down.png" alt="" />

                </Span>
                <InputExpanded type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."></InputExpanded>
                <Ul>
                    <H1>Platform</H1>
                    <Scroll>
                        {'Home'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <CustomLink to="MainPage">
                                <Li><CustomImg alt="Home" src='../../media/icons/house2.png' />Home</Li>
                            </CustomLink>
                        }
                        {'Publications'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="Publications" src='../../media/icons/publications.png' /> Publications</Li>
                        }
                        {'People'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="People" src='../../media/icons/people.png' /> People</Li>
                        }
                        {'Entities'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <CustomLink to="/Entities">
                                <Li><CustomImg alt="Entities" src='../../media/icons/people.png' /> Entities</Li>
                            </CustomLink>

                        }
                        {'Administration'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="Administration" src='../../media/icons/administration.png' /> Administration</Li>
                        }
                        <H1>Workspaces</H1>
                        {'Client Contract'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="Client contract" src='../../media/icons/network.png' /> Client contract</Li>
                        }
                        {'Supplier contract'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="Supplier contract" src='../../media/icons/network.png' /> Supplier contract</Li>
                        }
                        {'Corporate'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="Corporate" src='../../media/icons/entities2.png' /> Corporate</Li>
                        }
                        {'Group Norms'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="Group" src='../../media/icons/network.png' /> Group Norms</Li>
                        }
                        {'Group Norms'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                            <Li><CustomImg alt="Supplier contract" src='../../media/icons/network.png' /> Real estate contracts </Li>
                        }
                    </Scroll>
                </Ul>
                <UserList>
                    <span>Account</span>
                    <AccountItem>
                        <CustomLink to="/Profile">
                            <UserImg src='../../media/icons/myprofile.jpg' alt="" />
                            <NameUser>Bartłomiej Kocik</NameUser>
                            <Description>See Profile</Description>
                        </CustomLink>
                        <CustomImg alt="Privacy" src='../../media/icons/privacy.png' /> Privacy<br></br>
                        <CustomImg alt="Settings" src='../../media/icons/settings.png' /> Settings
                    </AccountItem>
                    <LogOutButton>
                        <CustomImg src='./media/icons/logout.png' alt=""></CustomImg><span>Logout</span>
                    </LogOutButton>
                </UserList>
            </Menu>
        </Wrapper>
    );
};
export default ExpandedMenu;