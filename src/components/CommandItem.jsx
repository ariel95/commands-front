import React from 'react'

//Helpers
import { isMobile } from '../helpers/windows'

const CommandItem = (props) => {

    const { cmd } = props;

    return (
        <tr key={cmd.id}>
            <td>{cmd.howTo}</td>
            <td>{cmd.line}</td>

            {
                !isMobile() && (<td platform-id={cmd.platfromId}>{cmd.platformName}</td>)
            }
        </tr>
    )
}

export default CommandItem
