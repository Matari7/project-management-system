import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <div>
      <h1>Project Management</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}: {project.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
