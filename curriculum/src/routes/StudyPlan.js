import styles from './style.module.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ChevronCompactDown, ChevronCompactUp } from 'react-bootstrap-icons';
import DropList from '../functions/dropList';
import dataCurriculum from '../functions/dataCurriculum';

const StudyPlan =()=> {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

const data = dataCurriculum();

  return (
    <>
    <h2 className={styles.h2} >Curriculum Ingenieria civil Informatica UTFSM</h2>
    <Card className={styles.card} >
      <ListGroup as="ul" >
        <div>
        <DropList className={styles.droplist} data={data} />
        </div>
      </ListGroup>
    </Card>
    </>
  );
}
export default StudyPlan;
