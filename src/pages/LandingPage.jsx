import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <section class="hero-section">
        <div class="hero-overlay">
          <h2 class="mb-3">Designed to get hired</h2>
          <p class="mb-4">Your skills, your story, your next job — all in one.</p>
          <Link to="/resumegenerator">
            <Button variant="contained" size="large" color="primary">
              Start Now
            </Button>
          </Link>
        </div>
      </section>

      <section class="container-fluid my-5 p-4">
        <div class="text-center mb-4">
          <h2>Tools</h2>
        </div>

        <div class="row align-items-center">

          <div class="col-md-6">
            <h5><strong>Resume</strong></h5>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h5><strong>Cover Letters</strong></h5>
            <p>Easily write professional cover letters.</p>

            <h5><strong>Jobs</strong></h5>
            <p>Automatically receive new and relevant job postings.</p>

            <h5><strong>Applications</strong></h5>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>


          <div class="col-md-6 text-center">
            <img src="resume.png" alt="Resume Examples" class="resume-img" />
          </div>
        </div>
      </section>

      <section class="container-fluid bg-light p-4">
        <h2 class="mb-5 text-center">Testimony</h2>
        <div class="row">

          <div class="col-lg-6">
            <h3 class="mb-4">Trusted by professionals worldwide</h3>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you land the job. Whether
              you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly
              stands out.
            </p>
          </div>


          <div class="col-lg-6">

            <div class="row row-cols-4 g-3 justify-content-center">
              <div class="col"><img src="1.jpg" alt="User 1" class="testimonial-img" /></div>
              <div class="col"><img src="1.jpg" alt="User 2" class="testimonial-img" /></div>
              <div class="col"><img src="1.jpg" alt="User 2" class="testimonial-img" /></div>
              <div class="col"><img src="1.jpg" alt="User 2" class="testimonial-img" /></div>

              <div class="col"><img src="2.jpg" alt="User 1" class="testimonial-img" /></div>
              <div class="col"><img src="2.jpg" alt="User 1" class="testimonial-img" /></div>
              <div class="col"><img src="2.jpg" alt="User 1" class="testimonial-img" /></div>
              <div class="col"><img src="2.jpg" alt="User 1" class="testimonial-img" /></div>

              <div class="col"><img src="3.jpg" alt="User 1" class="testimonial-img" /></div>
              <div class="col"><img src="3.jpg" alt="User 1" class="testimonial-img" /></div>
              <div class="col"><img src="3.jpg" alt="User 1" class="testimonial-img" /></div>
              <div class="col"><img src="3.jpg" alt="User 1" class="testimonial-img" /></div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default LandingPage
