import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import DataPickers from "../components/DataPickers";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useContextDates from '../context/createContext'
const CardFromDate = ({ onPress }) => {
    const { setFechainicial, setFechafinal, fechainicial, fechafinal } = useContext(useContextDates)
    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Header>Fechas</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Row className="mb-2">
                            <Col>
                                <Form.Label htmlFor="inputPassword5">Fecha Inicial:</Form.Label>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <DataPickers
                                    refDate={fechainicial}
                                    dateF={(dateStart) => {
                                        setFechainicial(dateStart)
                                    }} />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col>
                                <Form.Label htmlFor="inputPassword5">Fecha Final:</Form.Label>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <DataPickers
                                    refDate={fechafinal}
                                    dateF={(dateEnd) => {
                                        setFechafinal(dateEnd)
                                    }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className='col-12' onClick={onPress}>Consultar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default CardFromDate