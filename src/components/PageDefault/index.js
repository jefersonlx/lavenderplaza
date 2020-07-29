import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';

function PageDefault(props) {
    return (
        <div>
            <Menu />
            {props.children}
            <Footer />
        </div>
    );
}

export default PageDefault;   