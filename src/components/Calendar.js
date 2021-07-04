import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import Tabs from './Tabs';
import Translator from './translator';
import defaultMsg from './language/defaultMessages';

function Calendar(props) {
    const [param, setParameters] = useState("");
    const [view, setView] = useState(false);
    const [update, setUpdate] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleChange = date => {
        const time = new Date(date).getTime() + 4 * (3600000); 
        props.updatedData(time, props.item);
        setDate(date);
        setView(false);
        setUpdate(true);
    }

    const handleClick = () => {
        setView(prevState => !prevState);
        setUpdate(false);
        setParameters(props.item['name']);
    }
    const activeView = view;
    const renderCalendar = () => {
        if (activeView) {
            return <ReactCalendar onChange={handleChange}
                value={date} />;
        }
        return null;
    }
    const someUpdate = update;
    const renderUpdate = () => {
        if (someUpdate) {
            return <div><Tabs key={update} param={param}
                update={update}
                date={date} />
            </div>
        }
        return null;
    }
    return (
        <div>
            <img alt='calendar' className="ml-5 calendar " src={require('../Assets/calendar.png')}/>
            <button onClick={handleClick} variant="light" style={{
                background: "white", color: "#57698a",
                textDecoration: "none", border: "0.4em solid white", marginTop: "5px", fontSize: "0.9em"
            }}
            ><p className="ml-0 mx-0 my-0"> {Translator('scheduleAgain', defaultMsg.msg.err)}</p>
            </button>
            {renderCalendar()}
            <div style={{ display: "none" }}>
                {renderUpdate()}
            </div>
        </div>
    );
};

export default Calendar;