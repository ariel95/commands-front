import React from 'react'

//Components bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

//CSS
import '../public/css/CommandAdd.css'


const CommandAdd = () => {

    //Const
    const initialCommandData = {
        howTo: "",
        line: "",
        platformId: -1
    };

    //Variables
    // const [loading, setLoading] = React.useState(true);
    const [platforms, setPlatforms] = React.useState([]);
    const [command, setCommand] = React.useState(initialCommandData);

    //Loader
    React.useEffect(() => {
        getAllPlatforms();
    }, [])

    //Functions
    const getAllPlatforms = async () => {
        try {
            const response = await fetch("https://localhost:5001/api/platforms");
            const platforms = await response.json();
            setPlatforms(platforms);
            // setLoading(false);
        } catch (error) {

        }
    }

    const isValid = (cmd) => {
        let valid = true;

        if (cmd.HowTo === "") valid = false;
        if (cmd.line === "") valid = false;
        if (cmd.platformId === -1) valid = false;

        return valid;
    }

    const onClickCreate = async () => {
        try {
            console.log("click create");
            if (!isValid(command)) {
                console.log("command not valid");
                return;
            }
            console.log("is valid");
            const response = await fetch("https://localhost:5001/api/commands", {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(command)
            })
            console.log("fetch?");
            const commandCreated = await response.json();
            console.log("Comando creado:", commandCreated);
        } catch (error) {

        }
    }

    return (
        <section id="command-add">
            <Form>
                <Container>
                    <Form.Group controlId="commandAdd.howTo">
                        <Form.Label>How to</Form.Label>
                        <Form.Control type="text" placeholder="Type here..." onChange={(e) => setCommand({ ...command, howTo: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="commandAdd.line">
                        <Form.Label>Line</Form.Label>
                        <Form.Control type="text" placeholder="Type here..." onChange={(e) => setCommand({ ...command, line: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="commandAdd.platform">
                        <Form.Label>Platform</Form.Label>
                        <Form.Control as="select" onChange={(e) => setCommand({ ...command, platformId: e.target.value })}>
                            <option id="-1">Select</option>
                            {
                                platforms.length > 0 && (
                                    platforms.map(platform => (
                                        <option key={platform.id} id={platform.id} value={platform.id}>{platform.name}</option>
                                    ))
                                )
                            }
                        </Form.Control>
                    </Form.Group>
                    <Button variant="outline-dark" onClick={() => onClickCreate()}>Create</Button>
                    <Button variant="outline-dark" onClick={() => window.location.href = "/"}>Back</Button>
                </Container>
            </Form>
        </section>
    )
}

export default CommandAdd
