import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Paper, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { FaFileDownload, FaHistory } from 'react-icons/fa';
import Edit from './Edit';

function Preview() {
  return (
    <>
      {/* Top Action Bar */}
      <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ p: 2 }}>
        {/* Download */}
        <button className="btn fs-3" style={{ color: "rgb(21, 70, 77)" }}>
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

      {/* Resume Preview Section */}
      <Box component="section">
        <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
          {/* Header */}
          <h2>Name</h2>
          <h6>Job Title</h6>
          <p><span>Location</span> | <span>Email</span> | <span>Phone</span></p>
          <p>
            <a href="#">GitHub</a> | 
            <a href="#">LinkedIn</a> | 
            <a href="#">Portfolio</a>
          </p>

          {/* Summary */}
          <Divider sx={{ fontSize: '25px', my: 3 }}>Summary</Divider>
          <p className="fs-5 text-start">User Summary</p>

          {/* Education */}
          <Divider sx={{ fontSize: '25px', my: 3 }}>Education</Divider>
          <h5>User Education</h5>
          <p><span>College</span> | <span>University</span> | <span>Year</span></p>

          {/* Experience */}
          <Divider sx={{ fontSize: '25px', my: 3 }}>Professional Experience</Divider>
          <h5>User Job</h5>
          <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>

          {/* Skills */}
          <Divider sx={{ fontSize: '25px', my: 3 }}>Skills</Divider>
          <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            <Button variant="contained">User Skills</Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}

export default Preview;