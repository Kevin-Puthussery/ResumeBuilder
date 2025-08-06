import React from 'react'
import Divider from '@mui/material/Divider';
import { FaFileDownload } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { FaHistory } from "react-icons/fa";
import Edit1 from './Edit1';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";


function Preview({ resumeData, EditID, setResumeData, isfinished }) {

  const { skills, name, jobtitle, location, email, phoneNumber, github, linkedin, portfolio, courseName, college, university, year, jobRole, company, companylocation, duration, summary } = resumeData // destructure

  const downloadPDF = async () => {
    const input = document.getElementById("result") // to get the id
    const canvas = await html2canvas(input, { scale: 2 }) // convert the selected html to canvas (screenshot)
    const imgData = canvas.toDataURL("image/png") // convert canvas into image url

    // create pdf
    const pdf = new jsPDF("p", "mm", "a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight)
    pdf.save("resume.pdf")

  }


  return (
    <>
      <div className="d-flex justify-content-end gap-3 mt-5">
        {isfinished &&
          <div>
            <button onClick={downloadPDF} className='btn btn-primary me-3'><FaFileDownload /></button>
            <Edit1 EditID={EditID} setResumeData={setResumeData} />
          </div>
        }

        <Link to={'/history'}><button className='btn btn-primary'><FaHistory /></button></Link>
        <Link to={'/'}><button className='btn btn-primary'>Back</button></Link>
      </div>
      <div id='result' className="mx-5 my-3 shadow px-5 pb-5">

        <div>
          <div className='text-center'>
            <h2 className="pt-3">{name || "your name"}</h2>
            <span className="pt-2 text-primary">{jobtitle || "jobtitle"}</span>
          </div>
          <div className="text-center mt-2 ">
            <h6>{phoneNumber || "676565765"} | {email || "email.com"} | {location || "kochi"}</h6>
          </div>
          <div className="mt-2 text-center">
            <a className='me-3 ms-3' href={github}>github</a> |
            <a className='me-3 ms-3' href={linkedin}>linkedin</a> |
            <a className='me-3 ms-3' href={portfolio}>portfolio</a>
          </div>
        </div>
        <div className='mt-3'>
          <Divider>Summary</Divider>
          <p style={{ textAlign: "justify" }}>{summary || "lorem"}</p>
        </div>
        <div className='mt-3 text-center'>
          <Divider>Education</Divider>
          <h6 className='mt-2'>Btech</h6>
          <h6>{college || "college"} | {university || "university"} | {year || "year"}</h6>
        </div>
        <div className='mt-3 text-center'>
          <Divider>Professional Experience</Divider>
          <h6 className='mt-2'>{courseName}</h6>
          <h6>{company}| {company} | {duration}</h6>
          <Divider>Skills</Divider>
          <div className="m-2">
            {
              skills?.map((item) => (
                <button className="btn btn-primary me-3 mt-3">{item}</button>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview
