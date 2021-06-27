import { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector} from 'react-redux';
import { ISinglePhotoReducer } from '../../reducers/photoReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IState } from '../../reducers';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)`
    text-decoration: none;
    color:rgb(35,44,71);
`;

const ProfilContent = styled.div`
    width: 100%;
    padding-bottom:10px;
`;
const TopNavigation = styled.div`
    padding-left: 950px;
    display: flex;
    text-align: right;
    padding-top: 1%;
`;
const NavigationPictures = styled.img`
    height: 15px;
    width: 15px;
    margin-left: 30px;
    margin-right: 5px;
    cursor: pointer;
`;
const NavigationsText = styled.div`
    font-size: 15px;
    font-family: Arial;
    color: black;
    cursor: pointer;
    &:hover {
        color: lightgrey;
    }
`;
const ProfilCenter = styled.div`
    margin-top:20px;
    display: flex;
    flex-direction: row;
    font-size:24px;
`;
const ProfilContentImg = styled.div`
    width:30%;
    justify-content: center;
`;
const ProfilForm = styled.div`
    width:100%;   
`;
const ProfilImg = styled.div`
    width:200px;
    height:150px;
    margin:auto;
    margin-top:40px;
`;
const ImgProfil = styled.img`
    width:150px;
    height:150px;
    border-radius:50%;
    margin-left:15px;
`;
const SeeProfil = styled.div`
    text-align: center;
    margin-top:10px;
    font-size:26px;
    color:rgb(165,193,212);
    cursor:pointer;
`;
const MainForm = styled.form`
    display:flex;
    width:95%;
    flex-direction: column;
    margin-top:20px;
`;
const FormInput = styled.input`
    width:300px;
    height:30px;
    font-size:16px;
    margin:2px 0 2px 10px;
    &:disabled{
        background-color: white;
        border:none;
        font-weight:bold;
    }
`;
const FormInputSpecial = styled.input`
    width:300px;
    height:30px;
    font-size:16px;
    margin:5px 10px;
    margin-left:700px;
    &:disabled{
        background-color: white;
        border:none;
        font-weight:bold;
    }
`;
const ButtonSubmit = styled.button`
    width:30px;
    height:25px;
    margin-left:1000px;
    margin-top:10px;
    border:none;
    background-color:white;
    cursor:pointer;
`;
const Border = styled.div`
    margin:0;
    width:100%;
    border:1px solid lightgrey;
`;
export const ProfilHeader: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));
const user = usersList[0] || {};
    const [ form , setForm ] = useState<any>({
        name: user?.name,
        street : user?.address?.street,
        city: user?.address?.city,
        company : user?.company?.name,
        email: user?.email,
        phone : user?.phone
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

    return (
        < ProfilContent>
            <TopNavigation>
                    <NavigationPictures src="../../media/icons/comments.png"/>
                    <NavigationsText>Message</NavigationsText>
                    <NavigationPictures src="../../media/icons/settings.png"/>
                    <NavigationsText>Create a request</NavigationsText>
                    <NavigationPictures src="../../media/icons/user-plus.png"/>
                    <NavigationsText>Add to a cluster</NavigationsText>
                    <NavigationPictures src="../../media/icons/cancel.png"/>
            </TopNavigation>
           <ProfilCenter>
                <ProfilContentImg>
                    <ProfilImg>
                        <ImgProfil src={photoList[0]?.url} alt=""></ImgProfil>
                        <SeeProfil>See profile</SeeProfil>
                    </ProfilImg>
                </ProfilContentImg>
                <ProfilForm>
                    <MainForm onSubmit={handleSubmit}>
                            <ButtonSubmit type='submit' onClick={handleSubmitButton} ><img src="../../media/icons/pen.png" alt=""/></ButtonSubmit>
                        < FormInput className='inputform' name="name" disabled={isDisabled}  value={form.name} onChange={updateField}/>
                        < FormInput className='inputform' name="street" disabled={isDisabled}  value={form.street} onChange={updateField} />
                        < FormInput className='inputform'  name="city" disabled={isDisabled}  value={form.city}  onChange={updateField} />
                        < FormInput className='inputform' name="company" disabled={isDisabled}  value={form.company} onChange={updateField} />
                        <FormInputSpecial className ='special'name="email" disabled={isDisabled}  value={form.email} onChange={updateField}/>
                        <FormInputSpecial className ='special' name="phone" disabled={isDisabled} value={form.phone} onChange={updateField}/>
                    </MainForm>
                </ProfilForm>
            
           </ProfilCenter>
           <Border></Border>
        </ProfilContent>
    )
  };