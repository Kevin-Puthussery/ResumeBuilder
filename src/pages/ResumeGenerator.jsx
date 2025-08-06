import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function ResumeGenerator() {
  return (
    <>
      <div class="container p-4">
        <div class="row justify-content-center">
          <div class="col-12">
            <h1 class="main-heading">Create a job-winning Resume in minutes</h1>
          </div>
        </div>
        <div class="row justify-content-center">

          <div class="col-md-5 col-12 d-flex justify-content-center">
            <div class="card w-100 mx-2">
              <div class="card-body">
                <div class="card-icon">
                  <i class="fas fa-file-alt text-primary"></i>
                </div>
                <h5 class="card-title">Add your information</h5>
                <p class="card-text">Add pre-written examples to each section</p>
                <p class="step-text">Step 1</p>
              </div>
            </div>
          </div>


          <div class="col-md-5 col-12 d-flex justify-content-center">
            <div class="card w-100 mx-2">
              <div class="card-body">
                <div class="card-icon">
                  <i class="fas fa-download text-danger"></i>
                </div>
                <h5 class="card-title">Download your Resume</h5>
                <p class="card-text">Download and start applying</p>
                <p class="step-text">Step 2</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-4">
          <div class="col-12 text-center">
            <Link to={'/form'}><button class="btn btn-custom">LET'S START</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeGenerator
