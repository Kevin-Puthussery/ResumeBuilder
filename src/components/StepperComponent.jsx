import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { TiDelete } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import { addResumeAPI } from "../service/allAPI";

const steps = ['Basic Information', 'Contact details', 'Education details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function StepperComponent({ resumeData, setResumeData, setIsFinished, setEditID }) {
    console.log(resumeData);

    const { skills, name, jobtitle, location, email, phoneNumber, github, linkedin, portfolio, courseName, college, university, year, jobRole, company, companyLocation, duration, summary } = resumeData // destructure
    console.log('Skill array', skills)

    const [inputSkill, setInputSkill] = useState("")
    console.log('Input skills are : ', inputSkill);



    const suggestion = ["HTML", "CSS", "JAVASCRIPT", "REACT", "MERN", "ANGULAR", "MEAN"]

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const renderStepperContent = (steps) => {
        switch (steps) {
            case 0: return (
                <>
                    <h3>Personal Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}

                                value={resumeData.name}
                                id="standard-multiline-flexible"
                                label="Full Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, jobtitle: e.target.value })}

                                value={resumeData.jobtitle}
                                id="standard-multiline-flexible"
                                label="Job Title"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
                                value={resumeData.location}
                                id="standard-multiline-flexible"
                                label="Location"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </>
            )
            case 1: return (
                <>
                    <h3>Contact Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                                value={resumeData.email}
                                id="standard-multiline-flexible"
                                label="Email"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, phoneNumber: e.target.value })}
                                value={resumeData.phoneNumber}
                                id="standard-multiline-flexible"
                                label="Phone Number"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })}
                                value={resumeData.github}
                                id="standard-multiline-flexible"
                                label="GitHub Profile Link"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <TextField
                            onChange={(e) => setResumeData({ ...resumeData, linkedin: e.target.value })}
                            value={resumeData.linkedin}
                            id="standard-multiline-flexible"
                            label="Linkedin Profile Link"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                    <TextField
                        onChange={(e) => setResumeData({ ...resumeData, portfolio: e.target.value })}
                        value={resumeData.portfolio}
                        id="standard-multiline-flexible"
                        label="Portfolio Profile Link"
                        multiline
                        maxRows={4}
                        variant="standard"
                        fullWidth
                    />
                    <Grid>
                    </Grid>
                </>

            )
            case 2: return (
                <>

                    <h3>Education Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, courseName: e.target.value })}
                                value={resumeData.courseName}
                                id="standard-multiline-flexible"
                                label="Course Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, college: e.target.value })}
                                value={resumeData.college}
                                id="standard-multiline-flexible"
                                label="College Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })}
                                value={resumeData.university}
                                id="standard-multiline-flexible"
                                label="University"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <TextField
                            onChange={(e) => setResumeData({ ...resumeData, year: e.target.value })}
                            value={resumeData.year}
                            id="standard-multiline-flexible"
                            label="Year of Passout"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                </>
            )
            case 3: return (
                <>
                    <h3>Professional Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, jobRole: e.target.value })}
                                value={resumeData.jobRole}
                                id="standard-multiline-flexible"
                                label="Job or Internship"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, company: e.target.value })}
                                value={resumeData.company}
                                id="standard-multiline-flexible"
                                label="Company Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, companyLocation: e.target.value })}
                                value={resumeData.companyLocation}
                                id="standard-multiline-flexible"
                                label="Location"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <TextField
                            onChange={(e) => setResumeData({ ...resumeData, duration: e.target.value })}
                            value={resumeData.duration}
                            id="standard-multiline-flexible"
                            label="Duration"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                </>
            )
            case 4: return (
                <>
                    <h5>Skills & Certifications</h5>
                    <TextField
                        onChange={(e) => setInputSkill(e.target.value)}
                        label="Add Skill"
                        multiline
                        variant="standard"
                        fullWidth
                    />

                    <Button onClick={() => addSkill(inputSkill)} className="mt-3" variant="outlined">ADD+</Button>

                    <div className="mt-3">
                        <h5>Suggestions :</h5>
                        <div className="">
                            {
                                suggestion?.map((item) => (
                                    <Button onClick={() => addSkill(item)} className="mt-3 me-2" variant="outlined">{item}</Button>
                                ))
                            }
                        </div>
                        <div className="mt-3">
                            <h3>Added Skills :</h3>
                            {
                                skills?.length > 0 ?
                                    skills?.map((item) => (
                                        <span className="btn btn-primary mb-3 me-3">{item}<button onClick={() => handleDeleteSkill(item)}
                                            className="ms-3 btn btn-primary"><TiDelete /></button></span>
                                    )) : ""
                            }
                        </div>
                    </div>

                </>

            )
            case 5: return (
                <>
                    <h3>Professional Summary</h3>
                    <TextField
                        onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                        value={resumeData.summary}
                        id="standard-multiline-flexible"
                        label="Write a short summary of yourself"
                        multiline

                        variant="standard"
                        fullWidth
                        rows={4}
                    />
                </>

            )

            default: return null
        }

    }

    const addSkill = (adskill) => {
        console.log("Added skill from add function", adskill);
        if (!adskill) {
            alert("Fill the Skill");
        } else {
            if (skills.includes(adskill)) {
                alert("Skill already added..");
            } else {
                setResumeData({ ...resumeData, skills: [...skills, adskill] });
            }
            setInputSkill("");
        }
    };

    const handleDeleteSkill = (deleteSkill) => {
        console.log(`Delete Skill function`, deleteSkill);
        setResumeData({ ...resumeData, skills: skills.filter(((item) => item !== deleteSkill)) })
    }

    const handleSubmitResume = async () => {

        if (!skills || !name || !jobtitle || !location || !email || !phoneNumber || !github || !linkedin || !portfolio || !courseName || !college || !university || !year || !jobRole || !company || !companyLocation || !duration || !summary) {
            toast.warning("Fill the form completely");
        } else {
            try {
                const result = await addResumeAPI(resumeData)
                console.log(result);
                setEditID(result.data.id)
                setIsFinished(true)
                if (result.status >= 200 && result.status < 300) {
                    toast.success('Resume Added Successfully')

                    

                } else {
                    toast.danger('Error in adding Resume')
                }
            } catch (error) {
                console.log(`Server Error, ${error}`);
                alert('Server Error, Please Try Again')
            }

        }
    }

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
        setResumeData({
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
    };


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                            <button onClick={handleSubmitResume} className="btn btn-success">Add Resume</button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {renderStepperContent(activeStep)}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </>
    )
}


export default StepperComponent
