import React from 'react'
import { useState } from 'react';
import { TiEdit } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { TiDeleteOutline } from "react-icons/ti";
import { getAResumeAPI,updateResumeAPI } from '../service/allAPI';
import { ToastContainer, toast } from 'react-toastify';

function Edit1({ EditID, setResumeData }) {
    console.log(EditID);

    const [editResumeData, setEditResumeData] = useState({
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
        summary: "",
        id: ""
    })

    const [editInputSkill, setEditInputSkill] = useState("")

    // console.log(deleteID);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        getEditResume()
    }

    const getEditResume = async () => {
        try {
            const result = await getAResumeAPI(EditID)
            console.log(result);
            setEditResumeData(result.data)
        } catch (err) {
            console.log(err);
        }
    }

    console.log(editResumeData);

    const handleDeleteSkill = (deleteSkill) => {
        // console.log(`Delete Skill function`, deleteSkill);
        setEditResumeData({ ...editResumeData, skills: editResumeData.skills.filter(((item) => item !== deleteSkill)) })
    }

    const addSkill = (addSkill) => {
        console.log("Added skill from add function", addSkill);
        if (!addSkill) {
            toast.warning('Fill the skill')
        } else {
            if (editResumeData.skills.includes(addSkill)) {
                toast.warning('Skill already added..')
            } else {
                setEditResumeData({
                    ...editResumeData, skills: [
                        ...editResumeData.skills, addSkill]
                })
            }
            setEditInputSkill("")
        }
    }

    const handleUpdate = async () => {
        try {
            const result = await updateResumeAPI(EditID, editResumeData)
            console.log(result);
            setResumeData(result.data)
            handleClose()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={handleShow}>
                <TiEdit />
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Resume Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Personal Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Full Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.name}

                                onChange={(e) => setEditResumeData({ ...editResumeData, name: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Job Title"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.jobtitle}

                                onChange={(e) => setEditResumeData({ ...editResumeData, jobtitle: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Location"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.location}
                                onChange={(e) => setEditResumeData({ ...editResumeData, location: e.target.value })}
                            />
                        </Grid>
                    </Grid>

                    <h3>Contact Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Email"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.email}
                                onChange={(e) => setEditResumeData({ ...editResumeData, email: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Phone Number"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.phoneNumber}
                                onChange={(e) => setEditResumeData({ ...editResumeData, phoneNumber: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="GitHub Profile Link"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.github}
                                onChange={(e) => setEditResumeData({ ...editResumeData, github: e.target.value })}
                            />
                        </Grid>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Linkedin Profile Link"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                            value={editResumeData?.linkedin}
                            onChange={(e) => setEditResumeData({ ...editResumeData, linkedin: e.target.value })}
                        />
                    </Grid>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Portfolio Profile Link"
                        multiline
                        maxRows={4}
                        variant="standard"
                        fullWidth
                        value={editResumeData?.portfolio}
                        onChange={(e) => setEditResumeData({ ...editResumeData, portfolio: e.target.value })}
                    />
                    <Grid>
                    </Grid>

                    <h3>Education Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Course Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.courseName}
                                onChange={(e) => setEditResumeData({ ...editResumeData, courseName: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="College Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.college}
                                onChange={(e) => setEditResumeData({ ...editResumeData, college: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="University"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.university}
                                onChange={(e) => setEditResumeData({ ...editResumeData, university: e.target.value })}
                            />
                        </Grid>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Year of Passout"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                            value={editResumeData?.year}
                            onChange={(e) => setEditResumeData({ ...editResumeData, year: e.target.value })}
                        />
                    </Grid>

                    <h3>Professional Details</h3>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Job or Internship"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.jobRole}
                                onChange={(e) => setEditResumeData({ ...editResumeData, jobRole: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Company Name"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.company}
                                onChange={(e) => setEditResumeData({ ...editResumeData, company: e.target.value })}
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Location"
                                multiline
                                maxRows={4}
                                variant="standard"
                                fullWidth
                                value={editResumeData?.companyLocation}
                                onChange={(e) => setEditResumeData({ ...editResumeData, companyLocation: e.target.value })}
                            />
                        </Grid>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Duration"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                            value={editResumeData?.duration}
                            onChange={(e) => setEditResumeData({ ...editResumeData, duration: e.target.value })}
                        />
                    </Grid>

                    <div className="mt-3">
                        <h5>Skills & Certifications</h5>
                        <TextField
                            label="Add Skill"
                            multiline
                            variant="standard"
                            fullwidth
                            value={editInputSkill}
                            onChange={(e) => setEditInputSkill(e.target.value)}
                        /><br />
                        <Button
                            onClick={() => addSkill(editInputSkill)}
                            className="mt-3" variant="outlined">ADD +</Button>
                        <div className="mt-3">
                            <h5>Selected Skills :</h5>
                            <div className="">
                                {
                                    editResumeData?.skills.map((item) => (
                                        <span className='btn btn-primary mb-3 me-3'>{item}
                                            <Button
                                                onClick={() => handleDeleteSkill(item)}
                                                className="me-2 ms-3 text-danger border-danger"
                                                variant="outlined"><TiDeleteOutline /></Button>
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3>Added Skils :</h3>
                        </div>
                    </div>

                    <h3>Professional Summary</h3>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Write a short summary of yourself"
                        multiline

                        variant="standard"
                        fullWidth
                        rows={4}
                    />



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button onClick={handleUpdate} className='btn btn-success'>Update</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Edit1