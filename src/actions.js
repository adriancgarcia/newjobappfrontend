import url from "./url";
import {redirect} from "react-router-dom";

// Create Action for Creating Newjobs
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newNewjob = {
        position: formData.get("position"),
        company_name: formData.get("company_name"),
        job_description: formData.get("job_description"),
        applied: formData.get("applied") || false,
        type_of_resume_sent: formData.get("type_of_resume_sent"),
        date_applied: formData.get("date_applied"),
        hiring_manager: formData.get("hiring_manager"),
        hiring_manager_email: formData.get("hiring_manager_email"),
        interview_status: formData.get("interview_status"),
        application_origin: formData.get("application_origin"),
        thankyou_sent: formData.get("thankyou_sent") || false
    }

    // make a request to create a newjob
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newNewjob)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating Newjobs
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated newjob
    const updatedNewjob = {
        position: formData.get("position"),
        company_name: formData.get("company_name"),
        job_description: formData.get("job_description"),
        applied: formData.get("applied") || false,
        type_of_resume_sent: formData.get("type_of_resume_sent"),
        date_applied: formData.get("date_applied"),
        hiring_manager: formData.get("hiring_manager"),
        hiring_manager_email: formData.get("hiring_manager_email"),
        interview_status: formData.get("interview_status"),
        application_origin: formData.get("application_origin"),
        thankyou_sent: formData.get("thankyou_sent") || false
    }

    // make a request to update a newjob
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedNewjob)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting Newjobs
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a newjob
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}