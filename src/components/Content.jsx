import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//CSS
import '../public/css/Content.css'

//Components
import Commands from './Commands'
import CommandAdd from './CommandAdd'

const Content = () => {
    return (
        <section id="content">
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Commands}></Route>
                    <Route path='/addCommand' exact component={CommandAdd}></Route>
                </Switch>
            </BrowserRouter>
            {/* <Commands /> */}
            {/* <CommandAdd /> */}
        </section>
    )
}

export default Content
