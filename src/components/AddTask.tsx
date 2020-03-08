import React, { useState } from 'react';
import styled from 'styled-components';

import { useAppState } from '../app-state';
import { createDoc } from '../helpers';
import { format as formatDate, addDays } from 'date-fns';
import useProject from '../hooks/useProject';
import { MenuItem, Menu } from './MenuButton';
import { StandardProj } from '../types';

import { IoIosCalendar, IoMdBriefcase } from 'react-icons/io';

export const AddTask = ({ onCancel }: any) => {
    const [{ auth }] = useAppState();
    const [{ user }] = useAppState();
    const projects = useProject(user.uid);

    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [projectName, setProjectName] = useState('');

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        let projectId = projectName || taskDate;
        let collectedDate: string = '';

        if (projectId === 'TODAY') {
            collectedDate = formatDate(Date.now(), 'dd/MM/yyyy');
        } else if (projectId === 'NEXT_7DAYS') {
            collectedDate = formatDate(addDays(Date.now(), 6), 'dd/MM/yyyy');
        }

        createDoc(
            {
                date: collectedDate,
                uid: auth.uid,
                task: task,
                projectId,
                archived: false
            },
            'tasks'
        );
        setTask('');
        setProjectName('');
    };

    return (
        <Newtask>
            <input
                data-todo-input
                type='text'
                onChange={e => setTask(e.target.value)}
            />
            <div>
                <span>
                    <Button data-todo-button onClick={handleSubmit}>
                        Add Task
                    </Button>
                    <Button data-todo-secondary-btn onClick={onCancel}>
                        Cancel
                    </Button>
                </span>
                <DropdownContainers>
                    <Menu label={<IoIosCalendar />}>
                        <MenuItem
                            onClick={() => setTaskDate(StandardProj.inbox)}>
                            Inbox
                        </MenuItem>
                        <MenuItem
                            onClick={() => setTaskDate(StandardProj.today)}>
                            Today
                        </MenuItem>
                        <MenuItem
                            onClick={() => setTaskDate(StandardProj.next7)}>
                            Next 7 days
                        </MenuItem>
                    </Menu>
                    {projects && (
                        <Menu label={<IoMdBriefcase />}>
                            {projects.map((item: any) => (
                                <MenuItem
                                    key={item.id}
                                    onClick={() => setProjectName(item.name)}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    )}
                </DropdownContainers>
            </div>
        </Newtask>
    );
};

const Button = styled.button`
    height: 32px;
`;

const Newtask = styled.div`
    > div {
        display: flex;
        justify-content: space-between;
    }
`;

const DropdownContainers = styled.span`
    display: inline-grid;
    grid-auto-flow: column;
    grid-column-gap: 16px;
`;
