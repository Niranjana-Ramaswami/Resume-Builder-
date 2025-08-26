import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Divider, Paper, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaFileDownload, FaHistory } from 'react-icons/fa';
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({userInput,finish}) {
  const [downloadStatus,setDownloadStatus]=useState(false)
  // console.log(userInput)

     /* get date  */
   const localTimeData = new Date();
const timeStamp = `${localTimeData.toLocaleDateString()}, ${localTimeData.toLocaleTimeString()}`;
console.log(timeStamp);

  const downloadCV=async()=>{
    /* get element for taking screenshot */
    const input=document.getElementById('result')
    const canvas=await html2canvas(input,{scale:2})
    const imgURL=canvas.toDataURL('image/png');
    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
     const pdfHeight = pdf.internal.pageSize.getHeight()
     pdf.addImage(imgURL,'PNG',0,0,pdfWidth,pdfHeight)
     pdf.save('resume.pdf')

     /* add download cv to json using api calls */
    try{
      const result=await addDownloadHistoryAPI({...userInput,imgURL,timeStamp})
      console.log(result);
      setDownloadStatus(true)

      
    }
    catch(err){
      console.log(err);
      
    }

  
     
  }
  return (
    <>
      { 
      userInput.personalData.name!="" &&
      <div className='flex flex-column'>
          {/* Top Action Bar */}
     
       { finish &&
         <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ p: 2 }}>
          {/* Download */}
          <button onClick={downloadCV} className="btn fs-3" style={{ color: "rgb(21, 70, 77)" }}>
            <FaFileDownload />
          </button>
  
          {/* Edit */}
          <div className="btn fs-3" style={{ color: "rgb(21, 70, 77)" }}>
            <Edit />
          </div>
  
          {/* History */}
          <Link to="/history" className="btn fs-3" style={{ color: "rgb(21, 70, 77)" }}>
            <FaHistory />
          </Link>
  
          {/* Back */}
          <Link to="/resume" className="btn fs-3" style={{ color: "rgb(21, 70, 77)" }}>
            BACK
          </Link>
        </Stack>
       }
  
        {/* Resume Preview Section */}
        <Box component="section">
          <Paper id="result" elevation={3} sx={{ my: 5, p: 5, textAlign: 'center',marginTop:'100px' }}>
            {/* Header */}
            <h2>{userInput.personalData.name}</h2>
            <h6>{userInput.personalData. jobTitle}</h6>
            <p><span>{userInput.personalData. location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData. phone}</span></p>
            <p>
              <a href={userInput.personalData.github}>GitHub</a> | 
              <a href={userInput.personalData.linkedIn}>LinkedIn</a> | 
              <a href={userInput.personalData.portfolio}>Portfolio</a>
            </p>
  
            {/* Summary */}
            <Divider sx={{ fontSize: '25px', my: 3 }}>Summary</Divider>
            <p className="fs-5 text-start">{userInput.summary}</p>
  
            {/* Education */}
            <Divider sx={{ fontSize: '25px', my: 3 }}>Education</Divider>
            <h5>{userInput.educationData.college}</h5>
            <p><span>{userInput.educationData.course}</span> | <span>{userInput.educationData.university}</span> | <span>{userInput.educationData.year}</span></p>
  
            {/* Experience */}
            <Divider sx={{ fontSize: '25px', my: 3 }}>Professional Experience</Divider>
            <h5>{userInput.experienceData.jobRole}</h5>
            <p><span>{userInput.experienceData.company}</span> | <span>{userInput.experienceData.jobLocation}</span> | <span>{userInput.experienceData.company}</span></p>
  
            {/* Skills */}
              <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Skills</Divider>
              <Stack justifyContent={'space-evenly'} spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                {
                  userInput.skills?.map(skill => (<Button variant="contained">{skill}</Button>

                  ))
                }
              </Stack>
          </Paper>
        </Box>
      </div>}
    </>
  );
}

export default Preview;