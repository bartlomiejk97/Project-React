import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPostReducer } from '../../../reducers/postsReducers';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { ISinglePost } from '../../../interfaces/ISinglePost';

const ResumeWorkContainer = styled.div`
    width:100%;
    margin-top:15px;
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
const ResumeWorkSpan = styled.span`
    display: inline-flex;
    width:100%;
    height: 50px;
    img{
        height: 25px;
        transform: translateX(-35px);
        padding-top: 5px;
        margin-top: 5px;
    }
    p{
    margin-top:5px;
    color:rgb(75,82,104);
    font-size:23px;
    font-weight:bold;
    margin-top: 15px;
    }
`;
const ResumeWorkFilterInput = styled.input`
    width:200px;
    margin-left:550px;   
    border:1px solid lightgrey;
    color:lightgrey;
    height:25px;
    padding-left:8px;
    padding-top:6px;
    border-radius:4px;
    margin-top: 5px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    &:hover{
       outline:none;
   }
   &:focus{
       outline:none;
   }
`;
const SelectWrapper = styled.div`
    width: 100px;
    height:25px;
    margin-top:-15px;
    select{
        margin-top:3px;
        width:200px;
        padding:8px;
        border:0;
        border-radius: 5px;
        outline: none;
        cursor:pointer;
        color:rgb(67,85,168);
        font-weight: 600;
        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    }
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

export const ResumeWork: FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const inputFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value;
        setInputText(text);
    }
    
    const [ localPosts, setLocalPosts] = useState<ISinglePost[]>([]);
    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    useEffect(() => {
        console.log(inputText);
        if(inputText === ""){
            setLocalPosts(
             postList
            )
        }else{
            setLocalPosts(
                postList.filter((post: any)=>{
                    return post.title.toLowerCase().includes(inputText.toLowerCase())
                })
            )  
        }
    },[inputText,postList])


    const [currentPage , setCurrentPage ] = useState<number>(0);
    const handlePageClick  = (data:any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }
    
    return (
        <ResumeWorkContainer>
            <ResumeWorkSpan>
                <p>Resume your work</p>
                <ResumeWorkFilterInput type='text' value={inputText} onChange={inputFilter} placeholder="Filter by title..." />
                <img src="../../media/icons/search.png" alt="" />
                <SelectWrapper>
                    <img src="../../media/icons/follfowed.png" alt="" />
                    <select>
                        <option value="followed">Followed</option>
                    </select>
                </SelectWrapper>
            </ResumeWorkSpan>
            {
               
                localPosts.slice(currentPage, currentPage +10).map((post) => (
                    <ResumeWorkMini key={post.id}>
                        <ResumeWorkTitle>{post.title}</ResumeWorkTitle>
                        <ResumeWorkText>{post.body}</ResumeWorkText>
                        <ResumeWorkBottom>
                            <img src="../../media/icons/logout.png" alt=""></img>Subsid.corp  <img src="../../media/icons/bell.png" alt=""></img>Supplier contract + Updated 3 Days ago by John Doe
                        </ResumeWorkBottom>
                    </ResumeWorkMini>
                ))
                
            }
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
                nextClassName={'next'}/>
        </ResumeWorkContainer>
    )
};