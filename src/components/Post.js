import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `1px solid`,
        borderRadius: '6px',
        margin: "0 auto",
        marginBottom:'15px',
        // marginTop: '20px',
        width: "80%",
        padding: "15px",
        color: 'white'
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h2>{post.position}</h2>
            <h3>{post.company_name}</h3>
            <h3>{post.job_description}</h3>
            {/* <h2>{post.applied}</h2>
            <h2>{post.type_of_resume_sent}</h2>
            <h2>{post.date_applied}</h2>
            <h2>{post.hiring_manager}</h2>
            <h2>{post.hiring_manager_email}</h2>
            <h2>{post.interview_status}</h2>
            <h2>{post.application_origin}</h2>
            <h2>{post.thankyou_sent}</h2> */}
        </Link> 
    </div>
}

export default Post;