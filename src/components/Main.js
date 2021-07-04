import React from 'react';
import ControlledTabs from './Tabs';
import LanguageProvider from './language/LanguageProvider';
import Translator from './translator';
import defaultMsg from './language/defaultMessages';

function Main() {
        return (
            <LanguageProvider>
            <div>
                <div className="container mr-auto pl-5">
                    <h1
                        style={{ color: "#2b416c" }}><b>{Translator('header',defaultMsg.msg.err)}</b></h1>
                </div>
                <br />
                <div className="container mr-auto pl-5">
                    <ControlledTabs />
                </div>
            </div>
            </LanguageProvider>
        );
}


export default Main;