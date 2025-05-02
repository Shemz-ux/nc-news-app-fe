import { useParams } from "react-router-dom"
import { fetchArticleByID, updateArticleVotes } from "../src/api";
import useApiRequests from "../hooks/apiRequests";
import {dateFormatter}  from "../utils/formatDate";
import CommentSection from "./CommentSection";
import { useState} from "react";
import Comment from "./Comment";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import Vote from "./Vote";
import Loading from "./Loading";

function ArticleItem(){
    const {article_id} = useParams()

    const {data: article, loading, error } = useApiRequests(fetchArticleByID, article_id)

    if (loading) return <Loading/>

    if (error) {
        return <p>Article could not be found.</p>
    }
    
    const {title, article_img_url, author, body, created_at, votes} = article

    return ( 
        <>
        <div className="article-item d-flex justify-content-center mt-4">
            <div className="card mb-3" style={{maxWidth: "55rem", maxHeight: "100rem"}} >
                <img src={article_img_url} className="card-img-top" alt={title} />
                <div className="card-body">
                <h2 className="card-title mb-3" style={{ fontWeight: "bold" }}>{title}</h2>
                <p className="card-text">{body}</p>
                <Vote article_id={article_id}/>
                <p className="card-text">
                    <small className="text-body-secondary">
                    {dateFormatter(new Date(created_at))} {' • '} {author}
                    </small>
                </p>
                </div>
            </div>
        </div>
        <CommentSection article_id={article_id}/>
        </>
    )
}

export default ArticleItem;