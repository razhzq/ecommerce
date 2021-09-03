import { Container, Row, Col } from 'react-bootstrap';




const Footer = () => {
    return ( 
        <div className="footer">
            <footer>
               <Container>
                   <Row>
                       <Col className="text-center py-3">Copyright &copy; ProShop</Col>
                   </Row>
               </Container>
            </footer>
        </div>
     );
}
 
export default Footer;