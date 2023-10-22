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
        <ListGroup.Item  onClick={handleClick} style={{backgroundColor:"#00838F", color:"white"}} as="li" >
          <div className={styles.sameline}>
          <div>Matemáticas, Fisicas, Química</div>
          <div className={styles.listicon} >{ open ? <ChevronCompactDown /> : <ChevronCompactUp /> }</div>
          </div>
        {open ?
          <ListGroup className={styles.sublist}>
            <ListGroup.Item> Matemáticas I </ListGroup.Item>
            <ListGroup.Item> Matemáticas II </ListGroup.Item>
            <ListGroup.Item> Matemáticas III </ListGroup.Item>
          </ListGroup>
        : <></> }
        </ListGroup.Item>
        <ListGroup.Item>Industrial Comercial</ListGroup.Item>
        <ListGroup.Item>Humanistas, Educacion Física y Libres</ListGroup.Item>
        <DropList className={styles.droplist} data={data} />
      </ListGroup>
    </Card>
    </>
  );
}
export default StudyPlan;
