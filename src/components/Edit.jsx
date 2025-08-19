import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { IoMdClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";


function Edit() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        maxHeight: '80vh',
        overflow: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button onClick={handleOpen} className='btn fs-3' style={{ color: "rgb(21, 70, 77)" }}>  <FaRegEdit /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal details */}

                        <h3>Personal Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField id="standard-basic-location" label="Location" variant="standard" />
                        </div>

                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-mail" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" />
                            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                            <TextField id="standard-basic-portfolio" label=" Portfolio Link" variant="standard" />
                        </div>


                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField id="standard-basic-college" label="College" variant="standard" />
                            <TextField id="standard-basic-university" label="University " variant="standard" />
                            <TextField id="standard-basic-year" label="Year of Passout " variant="standard" />

                        </div>


                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" />
                            <TextField id="standard-basic-company" label="Company Name " variant="standard" />
                            <TextField id="standard-basic-clocation" label="Company Location" variant="standard" />
                            <TextField id="standard-basic-duration" label="Duration " variant="standard" />

                        </div>


                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <TextField sx={{ width: '400px' }} id="standard-basic-skill" label="Add Skills" variant="standard" />
                            <Button variant="text">Add</Button>
                        </div>
                              <h5>Added Skills:</h5>
                                  <div className="d-flex flex-wrap justify-content-between my-3">
                                    <span className="btn btn-primary">React <button className='text-light btn'><IoMdClose /></button></span>
                                  </div>


                        <h3>Professional Summary</h3>
                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Write a short summary of yourself " variant="standard" multiline rows={4} varients="standard" />
                        </div>
                  
                                

                    </Typography>
                    <Button>Update</Button>
                </Box>
            </Modal>

        </>
    )
}

export default Edit