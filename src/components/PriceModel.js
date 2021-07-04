import React from 'react';
import Translator from './translator';
import { Button } from 'react-bootstrap';

import MyModal from './verticalModal';
import defaultMsg from './language/defaultMessages';
import "../../src/common.css"


function Price(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <span>
            <img className="mr-1 price-icon" src={require('../Assets/Price.png')}/>
            <Button variant="light" style={{ color: "#57698a", textDecoration: "none",fontSize: "0.95em" }}
                onClick={() => setModalShow(true)}>
                    {Translator('viewPricing',defaultMsg.msg.err)}
            </Button>
            <MyModal show={modalShow}
                onHide={() => setModalShow(false)} item={props.item}/>
        </span>
    );
}

export default Price;