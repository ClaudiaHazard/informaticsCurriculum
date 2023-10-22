import React, { useState } from 'react';
import styles from '../routes/style.module.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { ChevronCompactDown, ChevronCompactUp } from 'react-bootstrap-icons';


const Branch = ({ course }, idx) => {
    return (
        <ListGroup.Item key={`course-${idx}`} > {course} </ListGroup.Item>
    );
  };

const Root = ({ branchName, backgroundColor, color, children }, idx) => {
    const handleClick = () => {
        setOpen(!open);
      };

    const [open, setOpen] = useState(true);

    const childList = children.map(Branch);

    return (
        <ListGroup.Item  onClick={handleClick} style={{ backgroundColor:backgroundColor, color:color }} key={`branchName-${idx}`} as="li" >
            <div className={styles.sameline}>
            <div>{ branchName }</div>
            <div>{ open ? <ChevronCompactDown /> : <ChevronCompactUp /> }</div>
            </div>
            {open ? <ListGroup className={styles.sublist}> {childList} </ListGroup> : <></> }
        </ListGroup.Item>
    );
  };

export default function ({data}){
 return(
    <div className="container">
      <div className="list-group">{data.map(Root)}</div>
    </div>
 );
}