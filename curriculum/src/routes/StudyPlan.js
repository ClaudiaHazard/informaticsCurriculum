import styles from './style.module.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const StudyPlan =()=> {
  return (
    <>
    <h2 className={styles.h2} >Curriculum Ingenieria civil Informatica UTFSM</h2>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    </>
  );
}
export default StudyPlan;
