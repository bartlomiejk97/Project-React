import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WorkSpaces = styled.div`
    width:100%;
    margin-top:20px;
    display:flex;
    flex-wrap:nowrap;
    overflow-x:auto;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    border-radius:7px;
    a{
        text-decoration:none;
    }
`;
const WorkSpacesMini = styled.div`
    width:300px;
    height:200px;
    background-color:white;
    display:block;
    margin:2px;
    margin-right:20px;
    flex: 0 0 auto;
    border:1px solid lightgray;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    border-radius:7px;
`;
const WorkSpacePhoto = styled.div`
    width:100%;
    height:80px;
    border-radius: 5px 5px 0 0;
    background-image: url("../../media/icons/peoplehands.jpg");
    background-size: cover;
    background-position: center;
`;
const WorkSpaceCard = styled.div`
    width:40%;
    display: flex;
    div {
        width: 75%;
        background-color: white;
        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
        height: 100px;
        position: relative;
        top: -40px;
        text-align: bottom;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        border-radius: 4px;
    }
    div > img {
        width:50%;
    }
`;
const WorkSpaceTitle = styled.div`
    opacity:0.8;
    display:block;
    margin-top:-90px;
    margin-left: 120px;
    color: #0a0909;
    font-size:20px;
    font-weight:600;
`;
const WorkSpaceBottom = styled.div`
    margin-top:38px;
    .contract{
        opacity:0.9;
        color:grey;
        padding-left:13px;
    }
    .contract > .First {
        padding-right:5px;
        padding-left:5px;
        width:17px;
        height:17px;
    }
    .contract > .Second{
        width:20px;
        height:23px;
        margin:auto;
        padding-right:5px;
        padding-left:5px;
    }
`;
const WorkSpaceBottomTwo = styled.div`
    margin-top:7px;
    p{
        color:grey;
        opacity:0.8;
        font-size:12px;
        margin-left:5px;
    }
`;


export const WorkSpaceSlider: FC = () => {
    const worksSpaceMiniRender: any[] = new Array(5).fill(null).map((item, key) => {
        return {
            id: key,
            img:"./media/icons/smallcontract.png",
        }
    })
    return (
        <WorkSpaces>
            {
                worksSpaceMiniRender.map((workSpaceMiniRender) => (
                    <Link to="/MainWorkSpace" key={workSpaceMiniRender.id}>
                    <WorkSpacesMini >
                        <WorkSpacePhoto/>
                        <WorkSpaceCard><div><img alt="" src={workSpaceMiniRender.img}/></div></WorkSpaceCard>
                        <WorkSpaceTitle>Client contract</WorkSpaceTitle>
                        <WorkSpaceBottom>
                            <p className="contract"><img className="First" src="./media/icons/smallcontract.png" alt="" /> Contract • <img className="Second" src="./media/icons/twopeople.png" alt="" /> 150 users</p>
                        </WorkSpaceBottom>
                        <WorkSpaceBottomTwo>
                            <p>Last update 2 days ago</p>
                        </WorkSpaceBottomTwo>
                    </WorkSpacesMini>
                    </Link>
                ))
            }
        </WorkSpaces>
    )
};