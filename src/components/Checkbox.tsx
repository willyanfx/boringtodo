import React from 'react';
import styled from 'styled-components';

type CheckboxProps = {
    onClick: () => void;
    id: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ onClick, id }) => (
    <CheckboxBtn role='checkbox' onClick={onClick}>
        <input type="checkbox" id={id} name="check" value="" />
        <label htmlFor={id}>
            <span></span>
        </label>
    </CheckboxBtn>
);



const CheckboxBtn = styled.div`
    cursor: pointer;
    display: table-cell; 
    width: 100%;
    height: 100%;
    vertical-align: middle; 
    text-align: center; 
       

    label {
        display: inline-block; 
        color: #fff;
        cursor: pointer;
        position: relative; 

        span {
            display: inline-block;
            position: relative;
            background-color: transparent;
            width: 25px;
            height: 25px;
            transform-origin: center;
            border: 2px solid #fff;
            border-radius: 50%;
            vertical-align: -6px;
            margin-right: 10px;
            transition: background-color 150ms 200ms, transform 350ms cubic-bezier(.78,-1.22,.17,1.89);
            
            
            &:before {
                content: "";
                width: 0px;
                height: 2px;
                border-radius: 2px;
                background: #fff;
                position: absolute;
                transform: rotate(45deg);
                top: 10px;
                left: 7px; 
                transition: width 50ms ease 50ms;
                transform-origin: 0% 0%;
            }
                
            &:after {
                content: "";
                width: 0;
                height: 2px;
                border-radius: 2px; 
                background: #fff;
                position: absolute;
                transform: rotate(305deg);
                top: 15px;
                left: 9px;
                transition: width 50ms ease;
                transform-origin: 0% 0%;
            }

        }
        &:hover {
            span {
            &:before {
                width: 5px;
                transition: width 100ms ease;
            }
            
            &:after {
                width: 10px;
                transition: width 150ms ease 100ms;
            }
            }
        }
    }

    input[type="checkbox"] {
        display: none; 
  
  
    &:checked {
        + label {
        span {
            background-color: #fff;
            transform: scale(1.25); 
            
            &:after {
            width: 10px;
            background: #1790b5;
            transition: width 150ms ease 100ms; 
            }
            
            &:before {
            width: 5px;
            background: #1790b5;
            transition: width 150ms ease 100ms; 
            }
        }
        
        &:hover { 
            span {
            background-color: #fff;
            transform: scale(1.25); 

            &:after {
                width: 10px;
                background: #1790b5;
                transition: width 150ms ease 100ms; 
            }

            &:before {
                width: 5px;
                background: #1790b5;
                transition: width 150ms ease 100ms; 
            }
            }  
        }
        }
    }
}
`;
