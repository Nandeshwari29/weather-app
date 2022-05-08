import React,{Component} from "react";
import './comments.css';
export default class Comments extends Component{
    constructor(props){
        super(props);
        this.state={
            yourComment: null,
            comments: [],
        }
        this.postComment=this.postComment.bind(this);
    }
    comment=(e)=>{
        this.setState({yourComment:e.target.value})
    }
    postComment(){
        if(this.state.yourComment.length)
        {
            this.setState({
                yourComment:"",
            })
            this.state.comments.push(this.state.yourComment);
        }
    }
    render(){
        const allComments=this.state.comments.map(eachComment=>(
                <p style={{textAlign: 'left', marginLeft: '35px', background:'rgb(239, 213, 213)', height:'40px',padding:'10px'}}>
                    {eachComment}
                </p>
        ))
        return(
            <>
            <div>
               <textarea className="txtbox" placeholder="Enter your comment here..." value={this.state.yourComment} onChange={this.comment}></textarea> 
               <br/>
                <button  className="submitComment" onClick={this.postComment}>Comment</button>
                <br></br>
                <br></br>
                <div className="display">
                    <p className="length">Comments {allComments.length}</p>
                    {allComments}
                </div>
            </div>
            </>
        )
    }
}