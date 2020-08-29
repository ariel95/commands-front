import React from 'react'

//CSS
import '../public/css/Commands.css'

//Components bootstrap
import Table from 'react-bootstrap/Table';

//Components
import CommandItem from './CommandItem'

//Helpers
import { isMobile } from '../helpers/windows'

const Commands = () => {
    
    const colsMobile = 2;
    const colsDesktop = 3;
    const [nCol, setNCol] = React.useState(isMobile ? colsMobile : colsDesktop);
    const [commands, setCommands] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getAllCommands = async () => {
        try {
            const response = await fetch("https://localhost:5001/api/commands");
            const cmds = await response.json();
            setCommands(cmds);
            setLoading(false);
        } catch (error) {

        }
    }

    React.useEffect(() => {
        getAllCommands();

        //Resize event
        function handleResize() {
            setNCol(isMobile() ? colsMobile : colsDesktop);
        }
        window.addEventListener('resize', handleResize)

    }, [])

    return (
        <section id="commands">
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>How to</th>
                        <th>Line</th>
                        {
                            !isMobile() && (<th>Platform</th>)
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? (
                            <tr>
                                <td colSpan={nCol}>Loading</td>
                            </tr>
                        ) : (
                                commands.length > 0 ? (
                                    commands.map(cmd => (
                                        <CommandItem cmd = { cmd }/>
                                    ))
                                ) : (
                                        <tr>
                                            <td colSpan={nCol}>We couldn't find anything</td>
                                        </tr>
                                    )
                            )

                    }

                </tbody>
            </Table>
        </section >
    )
}

export default Commands
