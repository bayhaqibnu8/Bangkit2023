import{Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <div>  
            <Navbar>
                <Container>
                    <Navbar.Brand>Default </Navbar.Brand>
                    <Nav> 
                        <Nav.Link>Trending</Nav.Link>
                        <Nav.Link>Try</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar