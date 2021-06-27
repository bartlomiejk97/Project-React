import { FC , useState} from 'react';
import styled from 'styled-components';
import { useSelector} from 'react-redux';
import { ISinglePhotoReducer } from '../../reducers/photoReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IState } from '../../reducers';

const MainContainer = styled.div`
    width: 100%;
    display: block;
`;
const ContentContainer = styled.div`
    margin-top:10px;
    width: 100%;
`;
const MainForm = styled.form`
    display:flex;
    width:100%;
    flex-direction: column;
    margin-top:20px;
`;
const InputDesc = styled.h1`
    color:lightgrey;
    font-size:20px;
    margin-left:30px;
    margin-bottom:10px;
`;
const FormInput = styled.input`
    width:250px;
    height:40px;
    font-size:16px;
    border-radius:5px;
    padding-left:15px;
    margin-left:30px;
    &.file{
        margin-top:10px;
        width:95%;
        aling-items:center;
       margin-bottom:10px;
    }
    &:disabled{
        background-color:white;
        font-weight:bold;
        border:none;
        
    }
`;
const FormInputTop = styled.input`
    width:250px;
    height:40px;
    font-size:16px;
    border-radius:5px;
    padding-left:15px;
    margin-left:30px;
    
    margin-bottom:10px;
    &:disabled{
        background-color: #C9E4E4;
        border:none;
        font-weight:bold;
    }
`;
const Border = styled.div`
    margin:0;
    width:100%;
    border:1px solid lightgrey;
`;
const PanelInformation = styled.div`
    width:100%;
`;
const Describe = styled.h1`
    font-size:30px;
    margin-left:30px;
    color:black;
    font-weight:bold;
    margin-top:20px;
    margin-bottom:30px;
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




const ContainerForInput = styled.div``;

//////////////
export const ProfileContent: FC = () => {
 
   
    const [ form , setForm ] = useState<any>({
        expertise : `Mergers and acquisition`,
        specialties : `Cross border operation`,
        specialties2 : `Transaction over 500M PLN/$`,
        admission : `Paris bar association`,
        admission2 : `Tunisian bar association`,
        country : `Tunisia`,
        hourly : `610 PLN/hour (Negociated)`,
        terms : `Monthly 10K PLN retainer`,
        service : `Corporate M&A and international`

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
        <MainContainer>
            <ContentContainer>
                <MainForm onSubmit={handleSubmit}>
                    <ButtonSubmit type='submit' onClick={handleSubmitButton} ><img src="../../media/icons/pen.png" alt=""/></ButtonSubmit>
                        <InputDesc>Exercise</InputDesc>
                        <FormInputTop  name="expertise" disabled={isDisabled} value={form.expertise} onChange={updateField}/>
                        <ContainerForInput>
                            <InputDesc>Specialties</InputDesc>
                            <FormInputTop  name="specialties" disabled={isDisabled} value={form.specialties} onChange={updateField}/>
                            <FormInputTop  name="specialties2" disabled={isDisabled}  value={form.specialties2} onChange={updateField}/>
                            <InputDesc>Admission to practice law</InputDesc>
                            <FormInputTop  name="admission" disabled={isDisabled}  value={form.admission} onChange={updateField}/>
                            <FormInputTop  name="admission2" disabled={isDisabled}  value={form.admission2} onChange={updateField}/>
                        </ContainerForInput>
                        <InputDesc>Counties</InputDesc>
                        <FormInputTop name="country" disabled={isDisabled}  value={form.country} onChange={updateField}/>
                        <Border></Border>
                    <PanelInformation>
                        <Describe>Panel informations</Describe>
                            <InputDesc>Hourly fee</InputDesc>
                            <FormInput name="hourly"disabled={isDisabled}  value={form.hourly} onChange={updateField}/>
                            <InputDesc>Terms and conditions</InputDesc>
                           
                            <FormInput name="terms" disabled={isDisabled}  value={form.terms} onChange={updateField} /><br></br>
                            <FormInput className="file" type="file"/>
                    </PanelInformation>
                </MainForm>
            </ContentContainer>
            <Border></Border>
        </MainContainer>
    );
};