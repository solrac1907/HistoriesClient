/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { getHistCliente } from '../actions/getDataApi'
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import PaintHistories from "../components/PaintHistories";
import { PaintPieGraph } from '../components/PaintPieGraph'
import Loader from '../components/Loader'
import { columnsClient } from '../actions/data'
import useContextDates from '../context/createContext'
import CardFromDate from "../components/CardFromDate";
const Client = () => {
    const { fechainicial, fechafinal } = useContext(useContextDates)
    const [data, setData] = useState([])
    const [dataPie, setDataPie] = useState([])
    const [loading, setLoading] = useState(false)
    const handleDataPie = (pieData) => {
        let pie = pieData.map((element) => ({ value: element.consumo_comercial, name: `${element.Linea}-C.Comercial` }))
        setDataPie(pie)
    }
    const handleGetHistCliente = () => {
        setLoading(true)
        getHistCliente({ fechainicial: fechainicial, fechafinal: fechafinal })
            .then((data) => {
                setData(data)
                handleDataPie(data)
                setLoading(false)
            })
    }
    useEffect(() => {
        handleGetHistCliente()
    }, [])

    return (
        <Container>
            {
                loading ? <Loader /> :
                    <>
                        <Row className="d-flex align-items-center">
                            <Col>
                                <CardFromDate onPress={handleGetHistCliente} />
                            </Col>
                            <Col>
                                <PaintPieGraph data={dataPie} />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col className="">
                                {data && <PaintHistories data={data} columns={columnsClient} />}
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
};
export default Client;