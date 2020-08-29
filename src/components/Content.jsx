import React from 'react'

//CSS
import '../public/css/Content.css'

//Components
import Commands from './Commands'
import CommandAdd from './CommandAdd'

const Content = () => {
    return (
        <section id="content">
            {/* <Commands /> */}
            <CommandAdd />
        </section>
    )
}

export default Content
