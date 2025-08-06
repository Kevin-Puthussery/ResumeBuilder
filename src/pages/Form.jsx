import React, { useState } from "react";
import StepperComponent from '../components/StepperComponent'
import Preview from '../components/Preview'


function Form() {

  const [resumeData, setResumeData] = useState({
  name: "",
  jobtitle: "",
  location: "",
  email: "",
  phoneNumber: "",
  github: "",
  linkedin: "",
  portfolio: "",
  courseName: "",
  college: "",
  university: "",
  year: "",
  jobRole: "",
  company: "",
  companyLocation: "",
  duration: "",
  skills: [],
  summary: ""
})

 const [isfinished, setIsFinished] = useState(false)

 const [EditID, setEditID] = useState("")

  return (
    <>
      <div className="container mt-5">
      {
        isfinished ?
          <div className="row">
            <div className="col-3"></div>
            <div className="col-md-6">
              <Preview isfinished={isfinished} resumeData={resumeData} EditID={EditID} setResumeData={setResumeData}/>
            </div>
            <div className="col-3"></div>
          </div>
          :
          <div className="row">
            <div className="col-md-6">
              <StepperComponent setIsFinished={setIsFinished} setEditID={setEditID} resumeData={resumeData} setResumeData={setResumeData} />
            </div>
            <div className="col-md-6">
              <Preview resumeData={resumeData} />
            </div>
          </div>
      }
    </div>
    </>
  )
}

export default Form