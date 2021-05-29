import { FC } from 'react';
import styled from 'styled-components';


const WorkspaceContainer = styled.div`
    background-color: white;
    width:100%;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    margin:auto;
`;
const WorkSpaceTopImg = styled.img`
    width:100%;
    max-height: 200px;
`;
const WorkSpaceTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 10px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);
    
`;
const WorkSpaceTopTitle = styled.h1`
    padding:2px 2px;
    font-size: 25px;
    font-weight: 600;
    margin-left:105px;
    margin-right:20px;
    margin-top: 20px;
    
    
`;
const WorkSpaceTopCog = styled.img`
    margin-left: 620px;
`;
const WorkSpaceTopCenter = styled.div`
    display: inline-flex; 
    margin-left:20px;
    margin-right:20px;
    margin-top: 5px;
    height:100px;

`;
const WorkSpaceTopCenterImg = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 10px;
`;
const WorkSpaceTopCenterText = styled.div`
    width:80%;
    margin-top:20px;
    margin-left: 10px;
    margin-right: 10px;
    height: 40px;
    color:grey;
    line-height: 1.4;
`;
const WorkSpaceCenterContainer =styled.div`
    width:100%;
    height: 300px;
    margin-top: 20px;
    background-color: rgb(243,243,243);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
`;
const WorkSpaceCenterTitle = styled.h1`
    width: 70%;
    height: 30px;
    padding-top:20px;
    margin-top:20px;
    margin-left: 40px;
    margin-bottom: 20px;
    color:grey;
    font-weight: 600;
    font-size:20px;
`;
const WorkSpaceCenterMini = styled.div`
    display: inline-block;
    width: 30%;
    background-color: white;
    border-radius:8px;
    height: 200px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    margin-left: 20px;
    margin-right: 10px;;
`;
const WorkCenterMiniImg = styled.img`
    margin-top:10px;
    margin-left:10px;
`;
const WorkCenterTitle = styled.h1`
    margin-top:10px;
    margin-left:10px;
    font-size: 20px;
    color:black;
    strong{
        color:rgb(42,50,77);
        font-weight: 700;
    }
`;
const WorkCenterText = styled.p`
    margin-top:10px;
    margin-left:10px;
    line-height: 1.4;
    width: 100%;
    
`;
export const WorkSpace: FC = () => {
    return (
        <WorkspaceContainer >
          <WorkSpaceTopImg alt="" src="./media/icons/workspacetop1.jpeg"/>
          <WorkSpaceTop>
                <WorkSpaceTopTitle>Corporate holdings
                    <WorkSpaceTopCog alt="" src="./media/icons/cog.png"/>
                </WorkSpaceTopTitle>
                <WorkSpaceTopCenter>
                    <WorkSpaceTopCenterImg alt="" src="./media/icons/entities2.png"/>
                    <WorkSpaceTopCenterText>
                        Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.
                    </WorkSpaceTopCenterText>
                </WorkSpaceTopCenter>
          </WorkSpaceTop>
        <WorkSpaceCenterContainer>
            <WorkSpaceCenterTitle>Start working on corporate matters</WorkSpaceCenterTitle>
                 <WorkSpaceCenterMini>
                    <WorkCenterMiniImg alt="" src='./media/icons/organization.png'/>
                    <WorkCenterTitle>Explore your <strong>entities</strong></WorkCenterTitle>
                    <WorkCenterText>
                        Take a few minutes to look at the, most important elements and specificities of your entities.
                    </WorkCenterText>
                </WorkSpaceCenterMini>
                <WorkSpaceCenterMini>
                    <WorkCenterMiniImg alt="" src='./media/icons/diagram.png'/>
                    <WorkCenterTitle>Structure the <strong>ownership</strong></WorkCenterTitle>
                    <WorkCenterText>
                        Get a clear view of the ownership by looking at the relations between individuals and entities.
                    </WorkCenterText>
                </WorkSpaceCenterMini>
                <WorkSpaceCenterMini>
                    <WorkCenterMiniImg alt="" src='./media/icons/schedule.png'/>
                    <WorkCenterTitle>Define the <strong>calendar</strong></WorkCenterTitle>
                    <WorkCenterText>
                        Prepare future events by creating detalied plans around the life of your entity.
                    </WorkCenterText>
                </WorkSpaceCenterMini>
        </WorkSpaceCenterContainer>
        </WorkspaceContainer>
    );
};

