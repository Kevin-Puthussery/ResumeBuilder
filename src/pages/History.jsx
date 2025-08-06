import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deleteResumeAPI, getAllResumeAPI } from '../service/allAPI';

function History() {

  const [resumeData, setResumeData] = useState([])
  
  const getResume = async () => {
    // api call
    try {
      const result = await getAllResumeAPI()
      console.log(result);
      setResumeData(result.data)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(resumeData);

  useEffect(() => {
    getResume()
  }, [])

  const handleDeleteResume = async (id) => {
  // console.log(id);
  try {
    const result = await deleteResumeAPI(id)
    console.log(result);
    getResume()
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
      <div className='py-3'>
        <h1 className='text-center py-4'>Resume Downloaded History</h1>
        <div className='d-flex justify-content-end me-3'>
          <Link to={'/'}><button className='btn btn-primary'>BACK</button></Link>
        </div>
        <div className="row">
          {
            resumeData?.length > 0 ? (
              resumeData?.map((item) => (
                <div className="col-md-3 mb-3">
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <div className='d-flex justify-content-between'>
                        <Card.Title>{item?.name}</Card.Title>
                        <span className='btn text-danger' onClick={() => handleDeleteResume(item?.id)}><MdDeleteForever /></span>
                      </div>
                      <Card.Subtitle className="mb-2 text-muted">{item?.jobtitle}</Card.Subtitle>
                      <Card.Title>{item?.courseName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{item?.college} | {item?.university} | {item?.year}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : "NO RESUMES ADDED"
          }
        </div>
      </div>
    </>
  )
}

export default History