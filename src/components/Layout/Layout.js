import React from 'react';

import Auxilary from '../../hoc/Auxilary';
import Classes from '../Layout/Layout.css';

const layout = ( props ) => (
    <Auxilary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={Classes.Content}> 
        {props.children}
    </main>
    </Auxilary>
);

export default layout;