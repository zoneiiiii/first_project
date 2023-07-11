import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"김지원",
        comment:"안녕하세요, 김지원입니다."
    },
    {
        name:"유재석",
        comment:"리액트 재미있어요~"
    },
    {   
        name:"김민경",
        comment:"저도 리액트 배우고 싶어요!"
    },
]
function CommentList(props) {
    return (
        <div>
            {comments.map((comment)=> {
                return(
                <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}
export default CommentList;