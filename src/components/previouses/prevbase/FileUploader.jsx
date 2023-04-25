import React, { useState } from 'react';
import Heading from "../../heading/Heading";
import './fileuploader.css';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileDescription, setFileDescription] = useState({
    course: '',
    professor: '',
    semester: ''
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleCourseChange = (event) => {
    setFileDescription({
      ...fileDescription,
      course: event.target.value
    });
  };

  const handleProfessorChange = (event) => {
    setFileDescription({
      ...fileDescription,
      professor: event.target.value
    });
  };

  const handleSemesterChange = (event) => {
    setFileDescription({
      ...fileDescription,
      semester: event.target.value
    });
  };

  const handleUploadClick = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('course', fileDescription.course);
    formData.append('professor', fileDescription.professor);
    formData.append('semester', fileDescription.semester);

    fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(response => {
      // Handle response from server
    }).catch(error => {
      // Handle error
    });
  };

  return (
    <div className="file-uploader">
        <div>
            <Heading title="Share previouses and spread benefit!" />
        </div>

        <div className='flex-container'>
            <div>
            <label htmlFor="course">Course:</label>
            <input
                type="text"
                id="course"
                value={fileDescription.course}
                onChange={handleCourseChange}
            />
            </div>      
            <div>
            <label htmlFor="professor">Professor:</label>
            <input
                type="text"
                id="professor"
                value={fileDescription.professor}
                onChange={handleProfessorChange}
            />
            </div>
        </div>

        <div className='flex-container'>
            <div>
            <label htmlFor="semester">Semester:</label>
            <input
                type="text"
                id="semester"
                value={fileDescription.semester}
                onChange={handleSemesterChange}
            />
            </div>
            <div>
            <label htmlFor="file">Select file:</label>
            <input
                type="file"
                id="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                onChange={handleFileChange}
            />
            {selectedFile && <p>Selected file: {fileName}</p>}
            </div>
        </div>


        <button className="upload-button" onClick={handleUploadClick}>Upload</button>
        <p>Your previous will be reviewed and approved by the admin before being available to your mates.</p>
    </div>
  );
}

export default FileUploader;
