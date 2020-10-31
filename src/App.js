import React, { useEffect, useState } from 'react';

import api from "./services/api"
import Header from './components/Headers';

import "./App.css"

function App() {
    const [projects, setProjects] = useState([])
    
    function handleAddProject() {
        setProjects([...projects, `project ${Date.now()}`])
    }

    useEffect(() => {
        api.get("/projects")
            .then(response => {
                setProjects(response.data);
            })
            .catch(err => alert("Ops! Aconteceu algum erro"))
    }, [])

    return (
    <>
        <Header title="Projetos"/>

        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>)
}

export default App
