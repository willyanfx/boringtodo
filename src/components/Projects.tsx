import React, { useState, useEffect, FC } from 'react';
import { useAppState } from '../app-state';
import useProject from '../hooks/useProject';
import { deleteProject } from '../helpers';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

type Proj = {
    createdAt: number;
    id: string;
    name: string;
    projectId: string;
    uid: string;
};

const Projects: React.FC = (): JSX.Element => {
    const [{ user }] = useAppState();
    const [projectCollection, setProjectCollection] = useState<Proj[]>([]);
    const projects = useProject(user.uid);
    useEffect(() => {
        if (projects) setProjectCollection(projects);
    }, [projects]);

    let projectDisplay = projectCollection.map(proj => (
        <ProjectLi key={proj.id} tabIndex={0}>
            <Link
                to={`/${proj.name}`}
                aria-label={`Select ${proj.name} as the task project`}>
                {proj.name}
            </Link>
            <button onClick={() => deleteProject(proj.id)}>♻️</button>
        </ProjectLi>
    ));

    return <>{projectDisplay}</>;
};
export default Projects;

const ProjectLi = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 32px;

    a {
        text-decoration: none;
    }

    button {
        background: transparent;
        border-radius: 4px;
    }
`;
