import React from 'react';
import { Navbar } from 'react-bootstrap';

function footer() {
    const footerText = 'vou Copyright 2020' + '\xa0\xa0\xa0\xa0' + 'Support at: example-email.co.uk';
    return(<div>
        <Navbar id="cappucino-3" variant="dark">
                <Navbar.Brand id="cappucino-1-text">
                    {footerText}
                </Navbar.Brand>
            </Navbar>
    </div>)
}

export default footer;