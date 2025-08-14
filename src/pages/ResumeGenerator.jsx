import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoDocumentText } from "react-icons/io5";
import { RiFileDownloadLine } from "react-icons/ri";

export default function ResumeGenerator() {
  return (
    <div className="container text-center py-5">
      <h4>Create a job-winning Resume in minutes</h4>

      <div className="row justify-content-center mt-5">
        {/*  document */}
        <div className="col-md-4 mb-3">
          <div className="card shadow p-4">
            <div style={{ fontSize: '40px', color: '#007bff' }}><IoDocumentText /></div>
            <h5 className="mt-3">Add your information</h5>
            <p >Add pre-written examples to each section</p>
            <small>Step 1</small>
          </div>
        </div>

        {/* download*/}
        <div className="col-md-4 mb-3">
          <div className="card shadow p-4">
            <div style={{ fontSize: '40px', color: '#dc3545' }}><RiFileDownloadLine /></div>
            <h5 className="mt-3">Download your Resume</h5>
            <p >Download and start applying</p>
            <small>Step 2</small>
          </div>
        </div>
      </div>
<a href='User'>
  
        <button  className="btn btn-dark mt-4">LET'S START</button>
</a>
    </div>
  );
}
