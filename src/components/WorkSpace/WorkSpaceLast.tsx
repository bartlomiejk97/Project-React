import { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPostReducer } from '../../reducers/postsReducers';


const WorkLast = styled.div`
    width:100%;
    min-height: 100vh;
    margin:auto;
`;
const LastUpadates = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border:1px solid red;
    height:120px;
    margin-top: 20px;
   
`;
const LastUpdatesTitle = styled.h1`
    
`;
const LastInput = styled.input`
  
    width:15%;
    height: 30px;
`;
const LastSelected = styled.select`
    width:15%;
    height: 36.2px;
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
                <LastUpdatesTitle>Last updates</LastUpdatesTitle>
                <LastInput></LastInput>
                <LastSelected></LastSelected>
            </LastUpadates>
        </WorkLast>
    )
}