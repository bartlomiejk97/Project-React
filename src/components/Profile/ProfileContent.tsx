import { FC } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    height: 1000px;
    // border: 2px solid red;
    display: block;
`;

// const ContentContainers = styled(HeaderWrapper)`
//     width: 100%;
//     height: 330px;
    
//     // border: 1px solid green;
//     padding-bottom: 0;
//     margin: 0;
//     margin-left: -1px;
//     margin-top: 3px;
//     padding-top: 0;
//     display: flex;
//     background: ${Colors.erty};
//     box-shadow: 0 0 0 0;
    
    
// `;

// const ContentBoxes = styled.div`
//     margin: 1%;
//     // border: 2px solid blue;
//     &:hover {
//         box-shadow:  2px 3px 7px ${Colors.lightBlue};
//     }
//     width: 50%;
//     height: 98%;
//     border-radius: 5px;
//     margin-bottom: 0;
//     box-shadow: 1px 1px 2px grey;
//     background: ${Colors.white};
// `;

// const LightGreyText = styled.div`
//     font-family: Arial;
//     font-size: 12px;
//     color: ${Colors.lightGrey}; 
//     margin: 1%;
// `;

// const BlueTextBoxWrapper = styled.div`
//     display: flex;
//     padding-left: 1%;
//     // border: 1px solid green;
// `;

// const BlueTextBox = styled.div`
//     background: ${Colors.erty};
//     font-size: 12px;
//     font-family: Arial;
//     color: ${Colors.lightBlue};
//     box-shadow: 1px 1px 2px grey;
//     margin: 1%;
//     padding: 4px;
//     border-radius: 5px;
// `;

// const ExpertiseBox = styled.div`
//     width: 90%;
//     height: 81%;
//     margin: 1%;
//     display: block;
//     margin-top: 5%;
//     margin-left: 5%;
//     // border: 1px solid green;
// `;

// const PanelBox = styled(ExpertiseBox)`
// `;

// export const DarkText = styled(LightGreyText)`
//     color: ${Colors.darkBlue};
//     font-size: 13px;
//     margin-bottom: 25px;
//     margin-left: 10px;
// `;

// const BoxTitle = styled(DarkText)`  
//     font-weight: bold;
//     margin-left: 5px;
// `;

// const Attachment = styled.div`
//     height: 25px;
//     width: 70%;
//     // border: 1px solid red;
//     background: ${Colors.veryLightGrey};
//     border-radius: 5px;
//     margin-top: 40px;
//     margin-left: 10px;
//     display: flex;
//     padding-left: 10px;
//     // justify-content: space-between;
//     cursor: pointer;
//     padding-top: 6px;
// `;

// const PictureAttachment = styled(NavigationPictures)`
//     margin-left: 20px;
//     margin-top: 3px;
// `;

// const ServiceBox = styled(ExpertiseBox)`
// `;

// const Correspondants = styled(Attachment)`
//     margin-top: 5px;
//     width: 90%;
//     display: flex;
//     padding-bottom: 5px;
//     margin-bottom: 5px;
// `;

// const CorrespondantsPicture = styled(PictureAttachment)`
//     background: ${Colors.lightGrey};
//     border-radius: 50px;
//     height: 23px;
//     width: 23px;
// `;
 
// const CorrespondantName = styled(BoxTitle)`
//     margin-left: 10px;   
// `;

// export const CorrespondantsRightPictures = styled(CorrespondantsPicture)`
//     margin-left: 60px;
//     background: none;
//     border-radius: 0;
//     height: 17px;
//     width: 17px;
// `;


export const ProfileContent: FC = () => {


    return (
        <MainContainer>
            {/* <ContentContainers>
                <ContentBoxes>
                    <ExpertiseBox>
                        <LightGreyText>Expertise</LightGreyText>
                        <BlueTextBoxWrapper>
                            <BlueTextBox>Mergers and aqusition</BlueTextBox>
                        </BlueTextBoxWrapper>
                        <LightGreyText>Specialities</LightGreyText>
                        <BlueTextBoxWrapper>
                            <BlueTextBox>Cross border operations</BlueTextBox>
                            <BlueTextBox>Transaction over $500</BlueTextBox>
                        </BlueTextBoxWrapper>
                        <LightGreyText>Admission to pratice law</LightGreyText>
                        <BlueTextBoxWrapper>
                            <BlueTextBox>Paris bar assotiation</BlueTextBox>
                            <BlueTextBox>Tunisian bar assotiation</BlueTextBox>
                        </BlueTextBoxWrapper>
                        <LightGreyText>Countries</LightGreyText>
                        <BlueTextBoxWrapper>
                            <BlueTextBox>Tunisia</BlueTextBox>
                        </BlueTextBoxWrapper>
                    </ExpertiseBox>
                </ContentBoxes>

                <ContentBoxes>
                    <PanelBox>
                        <BoxTitle>Panel informations</BoxTitle>
                        <LightGreyText>Hourly fee</LightGreyText>
                        <DarkText>610$/hour (Negociated)</DarkText>
                        <LightGreyText>Terms and conditions</LightGreyText>
                        <DarkText>Montly 10k $ retainer - see with Jean Smith</DarkText>
                        <Attachment>
                            <PictureAttachment src="../media/icons/attachment-attach-svgrepo-com.svg"/>
                            <DarkText>Attachment.jpg</DarkText>
                        </Attachment>
                    </PanelBox>
                </ContentBoxes>    
            </ContentContainers>

            <ContentContainers>

                 <ContentBoxes>
                     <ServiceBox>
                        <BoxTitle>Services and Projects</BoxTitle>
                        <DarkText>Corporate M&A and aquisitors</DarkText>
                        <BoxTitle>Internal correspondents</BoxTitle>

                        <Correspondants>
                            <CorrespondantsPicture src="../media/icons/people.svg"/>
                            <CorrespondantName>FirtsName LastName</CorrespondantName>
                            <CorrespondantsRightPictures src="../media/icons/chat.svg"/>
                            <DarkText>Message</DarkText>
                            <CorrespondantsRightPictures src="../media/icons/people.svg"/>
                            <DarkText>Profile</DarkText>
                        </Correspondants>
                        <Correspondants>
                        <CorrespondantsPicture src="../media/icons/people.svg"/>
                            <CorrespondantName>FirtsName LastName</CorrespondantName>
                            <CorrespondantsRightPictures src="../media/icons/chat.svg"/>
                            <DarkText>Message</DarkText>
                            <CorrespondantsRightPictures src="../media/icons/people.svg"/>
                            <DarkText>Profile</DarkText>
                        </Correspondants>
                        <Correspondants>
                        <CorrespondantsPicture src="../media/icons/people.svg"/>
                            <CorrespondantName>FirtsName LastName</CorrespondantName>
                            <CorrespondantsRightPictures src="../media/icons/chat.svg"/>
                            <DarkText>Message</DarkText>
                            <CorrespondantsRightPictures src="../media/icons/people.svg"/>
                            <DarkText>Profile</DarkText>
                        </Correspondants>
                     </ServiceBox>
                    
                </ContentBoxes>

                <ContentBoxes>
                    <Proposals>
                        <BoxTitle>Proposals</BoxTitle>
                    </Proposals>
                </ContentBoxes>

            </ContentContainers>

            <ContentContainers>

                <ContentBoxes>
                        <InternalRevievs>
                            <BoxTitle>Internal reviews</BoxTitle>
                        </InternalRevievs>
                </ContentBoxes>

                <ContentBoxes>
                        <CostAmount>
                            <BoxTitle>Amount of fees</BoxTitle>
                        </CostAmount>
                </ContentBoxes>

            </ContentContainers> */}
        </MainContainer>
    );
};