import {commonAPI} from "./commonAPI"
import {serverURL} from "./serverURL"

// 1. add resume details to the server

export const addResumeAPI = async (reqBody) => {
  return await commonAPI("post", `${serverURL}/resumes`, reqBody)
}

// get all resumes
export const getAllResumeAPI = async () => {
  return await commonAPI("GET", `${serverURL}/resumes`, "")
}

// delete a particular resume
export const deleteResumeAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/resumes/${id}`, "")
}

// get a resume api
export const getAResumeAPI = async (id) => {
  return await commonAPI("GET", `${serverURL}/resumes/${id}`, "")
}

// UPDATE RSUME API
export const updateResumeAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${serverURL}/resumes/${id}`, reqBody)
}