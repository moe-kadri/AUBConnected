import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './feed.css';

function Feed() {
  const [courseName, setCourseName] = useState('');
  const [professorName, setProfessorName] = useState('');
  const [feedbackData, setFeedbackData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setErrorMessage('');

      try {
        const response = await axios.get(`/api/feedback?courseName=${courseName}&professorName=${professorName}`);
        setFeedbackData(response.data);
      } catch (error) {
        setErrorMessage('An error occurred while fetching feedback data. Please try again later.');
      }

      setIsLoading(false);
    };

    fetchData();
  }, [courseName, professorName]);

  const handleCourseNameChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleProfessorNameChange = (event) => {
    setProfessorName(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    setFeedbackData([]);
  };

  return (
    <div className="feedback-form">
      <form>
        <div className="flex-container">
          <div>
            <label>
            Course Name:
            <input type="text" value={courseName} onChange={handleCourseNameChange} />
            </label>
          </div>
          <div>
            <label>
            Professor Name:
            <input type="text" value={professorName} onChange={handleProfessorNameChange} />
            </label>
          </div>
        </div>
        <button type="submit" onClick={handleSearchButtonClick}>Search</button>
      </form>
      {isLoading && <p>Loading feedback data...</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {!isLoading && feedbackData.length === 0 && !errorMessage && <p>No feedback data found.</p>}
      {!isLoading && feedbackData.length > 0 && (
        <ul className="feedback-list">
          {feedbackData.map((feedback) => (
            <li key={feedback.id}>{feedback.comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Feed;
