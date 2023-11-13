import {Link, useLoaderData, Form} from 'react-router-dom';
import "../styles.css";

function Show (props){
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "1px white",
        width: "100%",
        marginTop: '40px',
        margin: "0 auto",
        // marginTop: '40px'
    }

    return (
        <div style={div}>
            <div className="appliedJobs">    
                <h2>{post.position}</h2>
                <h3>{post.company_name}</h3>
                <h3>{post.job_description}</h3>
                <h3>{post.applied}</h3>
                <h3>{post.type_of_resume_sent}</h3>
                <h3>{post.date_applied}</h3>
                <h3>{post.hiring_manager}</h3>
                <h3>{post.hiring_manager_email}</h3>
                <h3>{post.interview_status}</h3>
                <h3>{post.application_origin}</h3>
                <h3>{post.thankyou_sent}</h3>
            </div>
            <div style ={{ textAlign: "center" }}>
                <h1>Update Job Application</h1>
                <Form method="post" action= {`/update/${post.id}`}>
                    <fieldset className="showForm">
                        <label htmlFor="position">Job Position</label>
                        <input type="text" name="position" placeholder="Job Position" defaultValue={post.position}/>
                        
                        <label htmlFor="company_name">Company Name</label>
                        <input type="text" name="company_name" placeholder="Company Name" defaultValue={post.company_name}/>
                        
                        <label htmlFor="job_description">Job Description</label>
                        <input type="text" name="job_description" placeholder="Job Description" defaultValue={post.job_description}/>
                        
                        <h3>Did you apply?</h3><input type="checkbox" name="applied" placeholder="Applied" defaultValue={post.applied}/>
                        
                        <label htmlFor="type_of_resume_sent">Type of resume sent</label>
                        <input type="text" name="type_of_resume_sent" placeholder="ATS or Design Resume" defaultValue={post.type_of_resume_sent}/>
                        
                        <label htmlFor="date_applied">Date Applied</label>
                        <input type="date" name="date_applied" placeholder="Date Applied" defaultValue={post.date_applied}/>
                        
                        <label htmlFor="hiring_manager">Hiring Manager</label>
                        <input type="text" name="hiring_manager" placeholder="Hiring Manager" defaultValue={post.hiring_manager}/>

                        <label htmlFor="hiring_manager_email">manager@email.com</label>
                        <input type="text" name="hiring_manager_email" placeholder="Hiring Manager email" defaultValue={post.hiring_manager_email}/>

                        <label htmlFor="interview_status">Interview Status</label>
                        <input type="text" name="interview_status" placeholder="Interview Status" defaultValue={post.interview_status}/>

                        <label htmlFor="applicatoin_origin">Origin of Job Posting</label>
                        <input type="text" name="application_origin" placeholder="Where did you find application" defaultValue={post.application_origin}/>
                        
                        <h3>Did you send a thank you note?</h3><input type="checkbox" name="thankyou_sent" placeholder="Thank you note sent" defaultValue={post.thankyou_sent}/>
                        <br></br>
                        <button>Update Job</button>
                    </fieldset>
                </Form>
            </div>
            <Link to ="/">
                <button>Back to Index</button>
            </Link>

            <Form method="post" action={`/delete/${post.id}`}>
                <button>Delete Job</button>
            </Form>
        </div>

    );
}

export default Show;