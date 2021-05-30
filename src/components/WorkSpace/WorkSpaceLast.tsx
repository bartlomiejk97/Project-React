import { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPostReducer } from '../../reducers/postsReducers';
import ReactPaginate from 'react-paginate';

const WorkLast = styled.div`
    width:100%;
    margin:auto;
    .pagination {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        position: relative;
        justify-content: center;
        color: blue;
        cursor: pointer;
        .active {
            color: black;
            padding: 5px;
        }
        .break-me{
            padding: 5px;
        }
        .page{
            padding: 5px;
        }
        .next{
            padding: 5px;
        }
        .previous{
            padding: 5px;
        }
    }
`;
const LastUpadates = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    margin-top: 20px;
`;
const LastUpdatesTitle = styled.h1`
    color:grey;
    font-size:30px;
    font-weight: 700;
    margin-top:5px;
    margin-left:15px;
`;
const LastInput = styled.input`
    width:15%;
    height: 30px;
    margin-right:-500px;
    margin-top:5px;
    border:1px solid lightgrey;
    color:grey;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    cursor:pointer;
    border-radius: 5px;
    &:hover{
       outline:none;
   }
   &:focus{
       outline:none;
   }
`;
const LastSelected = styled.select`
    width:15%;
    height: 36px;
    margin-top:5px;
    margin-right: 33px;
    border:0;
    border-radius: 5px;
    outline: none;
    cursor:pointer;
    color:rgb(67,85,168);
    font-weight: 600;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
`;
const LastButtonContainer = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    width:100%;
    height: 25px;
`;
const ButtonSmall = styled.button`
    width:5%;
    border:none;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);
    border-radius: 4px;
    color:blue;
    font-weight: 700;
    cursor:pointer;
`;
const ButtonAverage = styled.button`
    width:8%;
    border:none;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    border-radius: 4px;
    background-color:rgb(204,229,204);
    color:green;
    font-weight: 550;
    cursor:pointer;
    img{
        width:15px;
        height:15px;
        margin-right: 7px;
    }
`;
const ButtonBig = styled.button`
    width:20%;
    color:black;
    opacity: 0.9;
    background-color: rgb(204,204,204);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
    border-radius:4px;
    border:none;
    cursor:pointer;
    font-weight: 600;
    img{
        width:15px;
        height:15px;
        margin-right: 7px;
    }
`;
const LastUpdatesContainer = styled.div`
    width: 100%;
    margin-top: 20px;
`;
const ResumeWorkMini = styled.h1`
    width: 100%;
    background-color:white;
    border-radius:6px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    margin-top:20px;
`;
const ResumeWorkTitle = styled.div`
    font-size:20px;
    padding-top:10px;
    padding-left:10px;
    color:rgb(67,85,168);
    font-weight:bold;    
`;
const ResumeWorkText = styled.p`
    font-size:15px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom: 10px;
    text-align:justify;
`;
const ResumeWorkBottom = styled.span`
    font-size:12px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    img{
        width:12px;
        height:12px;
        margin-right:3px;
    }
`;



export const WorkSpaceLast: FC = () => {

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));

    const [currentPage , setCurrentPage ] = useState<number>(0);
    const handlePageClick  = (data:any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }

    return (
        <WorkLast>
            <LastUpadates>
                <LastUpdatesTitle>Latest updates</LastUpdatesTitle>
                <LastInput placeholder="Filter by title..." />
                <LastSelected></LastSelected>
            </LastUpadates>
            <LastButtonContainer>
                <ButtonSmall>All</ButtonSmall>
                <ButtonAverage><img src="./media/icons/entities2.png" />SAS</ButtonAverage>
                <ButtonAverage><img src="./media/icons/entities2.png" />SAS</ButtonAverage>
                <ButtonBig><img src="./media/icons/entities2.png" />Secondary business</ButtonBig>
                <ButtonBig><img src="./media/icons/community.png" />Commuticies</ButtonBig>
                <ButtonAverage><img src="./media/icons/notebook.png" />POA</ButtonAverage>
                <ButtonAverage><img src="./media/icons/publications.png" />Survey</ButtonAverage>
                <ButtonSmall>...</ButtonSmall>
            </LastButtonContainer>
            <LastUpdatesContainer>
            {
                postList.slice(currentPage, currentPage +9).map((post) => (
                    <ResumeWorkMini key={post.id}>
                        <ResumeWorkTitle>{post.title}</ResumeWorkTitle>
                        <ResumeWorkText>{post.body}</ResumeWorkText>
                        <ResumeWorkBottom>
                            <img src="../../media/icons/logout.png" alt=""></img>Subsid.corp  <img src="../../media/icons/bell.png" alt=""></img>Supplier contract + Updated 3 Days ago by John Doe
                        </ResumeWorkBottom>
                    </ResumeWorkMini>
                ))
            }
            </LastUpdatesContainer>
            <ReactPaginate
                previousLabel={'PREVIOUS'}
                nextLabel={'NEXT'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={postList.length}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page'}
                previousClassName={'previous'}
                nextClassName={'next'}       
            />
        </WorkLast>
    )
}



