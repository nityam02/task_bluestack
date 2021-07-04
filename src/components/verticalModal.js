import React from 'react';
import { Modal } from 'react-bootstrap';


function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center">
          <img className=""
          style={{width: "6em", height: "6em", float: "left"}} 
          src={require('../Assets/'+props.item.image)} alt="popupImage" />
          <div ><p className="text-center">{props.item.name}<br/>
          <sub>{props.item.region}</sub> </p></div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h4>Pricing: </h4>
        <h5>$ {(props.item.price)} - 1 Day</h5>
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;