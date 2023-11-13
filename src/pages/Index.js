import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';
import "../styles.css";

function Index (props){
    // const heroStyle = {
    //     backgroundImage: 'url(' + requestAnimationFrame('https://i.imgur.com/kCmlEAO.jpeg') + ')'
    // }

    // fetch the loaderdata using the useLoaderData hook
    const newjobs = useLoaderData()

    // map over the todos and create a Post component for each newjob

    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a New Job</h2>
        <Form method="post" action="/create">
            <fieldset className="form">
                <label htmlFor="position">Job Position</label>
                <input type="text" name="position" placeholder="Job Position"/>
                
                <label htmlFor="company_name">Company Name</label>
                <input type="text" name="company_name" placeholder="Company Name"/>
                
                <label htmlFor="job_description">Job Description</label>
                <input type="text" name="job_description" id="jobDescription" placeholder="Job Description"/>
                
                <h3>Did you apply?</h3><input type="checkbox" id="applied" className="applybox" name="applied" placeholder="Applied"/>

                <label htmlFor="type_of_resume_sent">Type of resume sent</label>
                <input type="text" name="type_of_resume_sent" placeholder="ATS or Design Resume"/>
                
                <label htmlFor="date_applied">Date Applied</label>
                <input type="date" name="date_applied" placeholder="Date Applied"/>
                
                <label htmlFor="hiring_manager">Hiring Manager</label>
                <input type="text" name="hiring_manager" placeholder="Name of Hiring Manager"/>

                <label htmlFor="hiring_manager_email">Hiring Manager email</label>
                <input type="text" name="hiring_manager_email" placeholder="manager@email.com"/>
                
                <label htmlFor="interview_status">Interview Status</label>
                <input type="text" name="interview_status" placeholder="1st, 2nd, or 3rd round"/>
                
                <label htmlFor="application_origin">Origin of Job Posting</label>
                <input type="text" name="application_origin" placeholder="Where was job posted?"/>
                
                <label htmlFor="thankyou_sent" id="cblabel"/>
                <h3>Did you send a thank you note?</h3><input type="checkbox" id="thankyou_sent" name="thankyou_sent" placeholder="Thank you note sent"/>
                <br></br>
                <button className="newButton">Create New Application</button>
            </fieldset>
        </Form>
    </div>
    <h1>Jobs Applied To:</h1>
    {newjobs.map((newjob) => <Post key={newjob.id} post={newjob}/>)}
</>

}

export default Index;
