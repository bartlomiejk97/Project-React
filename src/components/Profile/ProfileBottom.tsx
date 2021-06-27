import { FC, useState} from 'react';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { useSelector} from 'react-redux';
import { ISinglePhotoReducer } from '../../reducers/photoReducers';
import { Link } from 'react-router-dom';

const ProfileBottomContent= styled.div`
    width:100%;
`;
const Border = styled.div`
    margin:0;
    width:100%;
    border:1px solid lightgrey;
`;
const ButtonSubmit = styled.button`
    width:30px;
    height:25px;
    margin-left:1350px;
    margin-top:10px;
    border:none;
    background-color:white;
    cursor:pointer;
`;
const ServicesContent = styled.div`
    width:100%;
    padding-bottom:50px;
`;
const ServicesDesc = styled.h1`
    margin-left:30px;
    font-size:30px;
    font-weight:bold;
    margin-top:20px;
`;
const MainForm = styled.form`
    width:100%;
`;
const InternalContent = styled.div`
    width:100%;
`;
const InternalRow = styled.div`
    width:98%;
    margin:auto;
    height:70px;
    display:flex;
    flex-direction: row;
    margin-top:5px;
    background-color: rgb(226,230,238);
    margin-bottom:15px;
`;
const InternalImg = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    margin-left:70px;
    margin-top:10px;
    margin-right:60px;
`;
const InternalInput = styled.input`
    width:250px;
    height:40px;
    margin-left:10px;
    margin-top:10px;
`;
const ImgInternal = styled.img`
    width:50px;
    height:50px;
    margin-top:10px;
    margin-left:5px;
    margin-right:5px;
`;
const InternalDesc = styled.h2`
    font-size:20px;
    font-weight:bold;
    margin-left:30px;
    margin-bottom:10px;
    
`;
const ProposalsContent = styled.div`
    width:100%;
    margin-top:10px;
    margin-bottom:20px;
`;
const ProposalsDsc = styled.h1`
    margin-left:30px;
    font-size:30px;
    font-weight:bold;
    margin-top:20px;

`;
const ProposalMiniContainer = styled.div`
    width:100%;
    margin-top:10px;
    display:flex;
    flex-direction: row;
    text-align: center
`;
const ProposalMni = styled.div`
    font-size:25px;
    font-weight:bold;
    width:200px;
    height:30px;
    margin:auto;
    justify:center;
    
`;
const ProposalInputContainer = styled.div`
    margin-top:10px;
    margin-bottom:5px;
    display:flex;
    flex-direction: row;
    width:100%;
   
`;
const ProposalInput = styled.input`
    width:200px;
    height:30px;
    margin:auto;
    justify:center;
`;
const SeeMoreProposal = styled.div`
    color:rgb(165,193,212);
    font-size:30px;
    font-weight:bold;
    margin-left:1100px;
    margin-top:20px;
    padding:5px 5px;
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color:rgb(35,44,71);
`;

export const ProfileBottom: FC = () => {
    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));
    const [ form , setForm ] = useState<any>({
        firstName : `Firstname`,
        lastName : `Lastname`,
        message : `Message`,
        profile: `Profile`,
        name1: `Operation Ti...`,
        entity1 : `Renault Co...`,
        location1: `France`,
        expertise1 : `#Tax`,
        date1 : `20/01/2018`,
        firm1: 'Racine',
        name2: `Op. Prometh...`,
        entity2 : `Renault HQ`,
        location2: `USA`,
        expertise2 : `#M&A`,
        date2 : `18/02/2019`,
        firm2: 'Clifford chance',
        name3: `Op. Latandre`,
        entity3 : `Renault Br...`,
        location3: `Italia`,
        expertise3 : `#Social`,
        date3 : `18/02/2019`,
        firm3: 'SVZ',
        year:`2019`,
        cost: `CS 153`,
        total: `3500€`,
        law:`Clifford chance`,
        year1:`2018`,
        cost1: `CS 47`,
        total1: `9500€`,
        law1:`Linklaters`,
        year2:`2017`,
        cost2:`32`,
        total2:`10500€`
    });
    const [isDisabled, setIsDisabled] = useState<any>("disabled");
    const updateField = (event : any ) => {
        console.log(event.currentTarget.name);
        setForm({
            ...form,
            [event.target.name] : event.target.value,
        });
    }
    const handleSubmit = (event : any) => {
        event.preventDefault();
        console.log('my form', form);
    }
    const handleSubmitButton =() =>{
        setIsDisabled(isDisabled?"":"disabled");
    }

    return(
        <ProfileBottomContent>
            
            <ServicesContent>
                    <ServicesDesc>Sercices {`&`} projects</ServicesDesc>
                <MainForm onSubmit={handleSubmit}>
                        <ButtonSubmit type='submit' onClick={handleSubmitButton} ><img src="../../media/icons/pen.png" alt=""/></ButtonSubmit>
                    <InternalDesc>Internal correspondants</InternalDesc>
                        <InternalContent>
                            <InternalRow>
                                <InternalImg src={photoList[0]?.url} alt=""/>
                                <InternalInput name="firstName" disabled={isDisabled}  value={form.firstName} onChange={updateField}/>
                                <InternalInput name="lastName" disabled={isDisabled}  value={form.lastName} onChange={updateField}/>
                                <ImgInternal src="../../media/icons/comment.png" alt=""/>
                                <InternalInput name="message" disabled={isDisabled}  value={form.message} onChange={updateField}/>
                                <ImgInternal src="../../media/icons/user.png" alt=""/>
                                <InternalInput name="profile" disabled={isDisabled}  value={form.profile} onChange={updateField}/>
                            </InternalRow>
                            <InternalRow>
                                <InternalImg src={photoList[1]?.url} alt=""/>
                                <InternalInput name="firstName" disabled={isDisabled}  value={form.firstName} onChange={updateField}></InternalInput>
                                <InternalInput name="lastName" disabled={isDisabled}  value={form.lastName} onChange={updateField}></InternalInput>
                                <ImgInternal src="../../media/icons/comment.png" alt=""/>
                                <InternalInput name="message" disabled={isDisabled}  value={form.message} onChange={updateField}/>
                                <ImgInternal  src="../../media/icons/user.png" alt=""/>
                                <InternalInput name="profile" disabled={isDisabled}  value={form.profile} onChange={updateField}/>
                            </InternalRow>
                        </InternalContent>
                    <Border></Border>
                    <ProposalsContent>
                        <ProposalsDsc>Proposal</ProposalsDsc>
                        <ProposalMiniContainer>
                            <ProposalMni>Name</ProposalMni>
                            <ProposalMni>Entity</ProposalMni>
                            <ProposalMni>Location</ProposalMni>
                            <ProposalMni>Expertise</ProposalMni>
                            <ProposalMni>Date</ProposalMni>
                            <ProposalMni>Firm</ProposalMni>
                        </ProposalMiniContainer>

                        <ProposalInputContainer>
                            <ProposalInput name="name1" disabled={isDisabled}  value={form.name1} onChange={updateField}/>
                            <ProposalInput name="entity1" disabled={isDisabled}  value={form.entity1} onChange={updateField}/>
                            <ProposalInput name="location1" disabled={isDisabled}  value={form.location1} onChange={updateField}/>
                            <ProposalInput name="expertise1" disabled={isDisabled}  value={form.expertise1} onChange={updateField}/>
                            <ProposalInput name="date1" disabled={isDisabled}  value={form.date1} onChange={updateField}/>
                            <ProposalInput name="firm1" disabled={isDisabled}  value={form.firm1} onChange={updateField}/>
                        </ProposalInputContainer>
                        <ProposalInputContainer>
                            <ProposalInput name="name2" disabled={isDisabled}  value={form.name2} onChange={updateField}/>
                            <ProposalInput name="entity2" disabled={isDisabled}  value={form.entity2} onChange={updateField}/>
                            <ProposalInput name="location2" disabled={isDisabled}  value={form.location2} onChange={updateField}/>
                            <ProposalInput name="expertise2" disabled={isDisabled}  value={form.expertise2} onChange={updateField}/>
                            <ProposalInput name="date2" disabled={isDisabled}  value={form.date2} onChange={updateField}/>
                            <ProposalInput name="firm2" disabled={isDisabled}  value={form.firm2} onChange={updateField}/>
                        </ProposalInputContainer>
                        <ProposalInputContainer>
                            <ProposalInput name="name3" disabled={isDisabled}  value={form.name3} onChange={updateField}/>
                            <ProposalInput name="entity3" disabled={isDisabled}  value={form.entity3} onChange={updateField}/>
                            <ProposalInput name="location3" disabled={isDisabled}  value={form.location3} onChange={updateField}/>
                            <ProposalInput name="expertise3" disabled={isDisabled}  value={form.expertise3} onChange={updateField}/>
                            <ProposalInput name="date3" disabled={isDisabled}  value={form.date3} onChange={updateField}/>
                            <ProposalInput name="firm3" disabled={isDisabled}  value={form.firm3} onChange={updateField}/>
                        </ProposalInputContainer>

                    </ProposalsContent>
                    <SeeMoreProposal>
                        <CustomLink to="/ErrorPage">
                                 See more proposals
                        </CustomLink>
                    </SeeMoreProposal>
                    <Border></Border>
                    <ProposalsContent>
                        <ProposalsDsc>Internal reviews</ProposalsDsc>
                        <ProposalMiniContainer>
                            <ProposalMni>Name</ProposalMni>
                            <ProposalMni>Entity</ProposalMni>
                            <ProposalMni>Location</ProposalMni>
                            <ProposalMni>Expertise</ProposalMni>
                            <ProposalMni>Date</ProposalMni>
                        </ProposalMiniContainer>
                        <ProposalInputContainer>
                            <ProposalInput name="name1" disabled={isDisabled}  value={form.name1} onChange={updateField}/>
                            <ProposalInput name="entity1" disabled={isDisabled}  value={form.entity1} onChange={updateField} />
                            <ProposalInput name="location1" disabled={isDisabled}  value={form.location1} onChange={updateField}/>
                            <ProposalInput name="expertise1" disabled={isDisabled}  value={form.expertise1} onChange={updateField}/>
                            <ProposalInput name="date1" disabled={isDisabled}  value={form.date1} onChange={updateField}/>
                        </ProposalInputContainer>
                        <ProposalInputContainer>
                            <ProposalInput name="name2" disabled={isDisabled}  value={form.name2} onChange={updateField}/>
                            <ProposalInput  name="entity2" disabled={isDisabled}  value={form.entity2} onChange={updateField}/>
                            <ProposalInput  name="location2" disabled={isDisabled}  value={form.location2} onChange={updateField}/>
                            <ProposalInput name="expertise2" disabled={isDisabled}  value={form.expertise2} onChange={updateField}/>
                            <ProposalInput name="date2" disabled={isDisabled}  value={form.date2} onChange={updateField}/>
                        </ProposalInputContainer>
                        <ProposalInputContainer>
                            <ProposalInput name="name3" disabled={isDisabled}  value={form.name3} onChange={updateField}/>
                            <ProposalInput name="entity3" disabled={isDisabled}  value={form.entity3} onChange={updateField}/>
                            <ProposalInput name="location3" disabled={isDisabled}  value={form.location3} onChange={updateField}/>
                            <ProposalInput name="expertise3" disabled={isDisabled}  value={form.expertise3} onChange={updateField}/>
                            <ProposalInput name="date3" disabled={isDisabled}  value={form.date3} onChange={updateField}/>
                        </ProposalInputContainer>
                    </ProposalsContent>
                    <SeeMoreProposal>
                        <CustomLink to="/ErrorPage">
                            See more Reviews
                        </CustomLink>
                    </SeeMoreProposal>
                    <Border></Border>

                    <ProposalsContent>
                        <ProposalsDsc>Amount of fees</ProposalsDsc>
                        <ProposalMiniContainer>
                            <ProposalMni>Year</ProposalMni>
                            <ProposalMni>Cost center</ProposalMni>
                            <ProposalMni>Total amount</ProposalMni>
                            <ProposalMni>Law firm</ProposalMni>
                        </ProposalMiniContainer>

                        <ProposalInputContainer>
                            <ProposalInput name="year" disabled={isDisabled}  value={form.year} onChange={updateField}/>
                            <ProposalInput name="cost" disabled={isDisabled}  value={form.cost} onChange={updateField}/>
                            <ProposalInput name="total" disabled={isDisabled}  value={form.total} onChange={updateField}/>
                            <ProposalInput name="law" disabled={isDisabled}  value={form.law} onChange={updateField}/>
                        </ProposalInputContainer>
                        <ProposalInputContainer>
                            <ProposalInput name="year1" disabled={isDisabled}  value={form.year1} onChange={updateField}/>
                            <ProposalInput name="cost1" disabled={isDisabled}  value={form.cost1} onChange={updateField}/>
                            <ProposalInput name="total1" disabled={isDisabled}  value={form.total1} onChange={updateField}/>
                            <ProposalInput name="law1" disabled={isDisabled}  value={form.law1} onChange={updateField}/>
                        </ProposalInputContainer>
                        <ProposalInputContainer>
                            <ProposalInput name="year2" disabled={isDisabled}  value={form.year2} onChange={updateField}/>
                            <ProposalInput name="cost2" disabled={isDisabled}  value={form.cost2} onChange={updateField}/>
                            <ProposalInput name="total2" disabled={isDisabled}  value={form.total2} onChange={updateField}/>
                            <ProposalInput name="law1" disabled={isDisabled}  value={form.law1} onChange={updateField}/>
                        </ProposalInputContainer>
                    </ProposalsContent>
                    <Border></Border>
                </MainForm>
            </ServicesContent>
        </ProfileBottomContent>
    )};