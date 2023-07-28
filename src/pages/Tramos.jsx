/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { getHistTramos } from '../actions/getDataApi'
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import PaintHistories from "../components/PaintHistories";
import { PaintPieGraph } from '../components/PaintPieGraph'
import Loader from '../components/Loader'
import { columnsTramos } from '../actions/data'
import CardFromDate from "../components/CardFromDate";
import useContextDates from '../context/createContext'
const Tramos = () => {
    const [data, setData] = useState([])
    const [dataPie, setDataPie] = useState([])
    const [loading, setLoading] = useState(false)
    const { fechainicial, fechafinal } = useContext(useContextDates)
    const handleDataPie = (pieData) => {
        let pie = pieData.map((element) => ({ value: element.consumo, name: `${element.Linea}- Consumo` }))
        setDataPie(pie)
    }
    const handleGetHistTramos = () => {
        setLoading(true)
        getHistTramos({ fechainicial: fechainicial, fechafinal: fechafinal })
            .then((data) => {
                setData(data)
                handleDataPie(data)
                setLoading(false)
            })
    }
    useEffect(() => {
        handleGetHistTramos()
    }, [])

    return (
        <Container>
            {
                loading ? <Loader /> :
                    <>
                        <Row className="d-flex align-items-center">
                            <Col>
                                <CardFromDate onPress={handleGetHistTramos} />
                            </Col>
                            <Col>
                                <PaintPieGraph data={dataPie} />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col className="">
                                {data && <PaintHistories data={data} columns={columnsTramos} />}
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
};

export default Tramos;