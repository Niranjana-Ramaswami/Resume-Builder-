import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Paper, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div> 
      <h1 className='text-center my-5'>Resume Downloaded History</h1>
      <span><Link to={"/"} style={{marginTop:'-83px'}} className='float-end'>Back</Link></span>
       <Box component="section">
       <div className='container-fluid'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
         <div className='d-flex align-items-center justify-content-evenly'>
              <h6>Review At: <br /> 14/08/2025,11:11:00am</h6>
              <Button className='text-danger fs-5 ms-5'><MdDelete /></Button>
         </div>
           <div className='border rounded p-3'>
                <h2>Name</h2>
                <h6>Job Title</h6>
                <p><span>location</span> | <span>Email</span> | <span>Phone</span></p>
                <p>
                  <a href="">GitHub</a> | 
                  <a href="">Linkedin</a> |
                  <a href="">Portfolio</a>
                </p>
      
                <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                <p className="fs-5 text-start">User Summary</p>
      
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                <h5>User Education</h5>
                <p><span>College</span> | <span>University</span> | <span>Year</span></p>
      
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                <h5>User Job</h5>
                <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
      
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
                <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                  <Button variant="contained">User Skills</Button>
                </Stack>
           </div>
            </Paper>
          </div>
       </div>
      </Box>
      </div>
  )
}

export default History