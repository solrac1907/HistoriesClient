/* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { getTramosTramosForClient } from '../actions/getDataApi'
import DataPickers from "../components/DataPickers";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import PaintHistories from "../components/PaintHistories";
import { PaintPieGraph } from '../components/PaintPieGraph'
import Loader from '../components/Loader'
import { columnsTramosClient } from '../actions/data.js'
import { formatDate } from '../actions/functions'
import useContextDates from '../context/createContext'
import CardFromDate from "../components/CardFromDate";
const TramosForClient = () => {
    const [data, setData] = useState([])
    const [dataPie, setDataPie] = useState([])
    const [loading, setLoading] = useState(false)
    const { fechainicial, fechafinal } = useContext(useContextDates)
    const handleDataPie = (pieData) => {
        const lineas = pieData.map(({ Linea }) => Linea)
        const filtered = pieData.filter(({ Linea }, index) => !lineas.includes(Linea, index + 1))
        const sumPerdidas = filtered.map((_d) => {
            let sumLinea = pieData.reduce((a, b) => (b.Linea === _d.Linea) ? a + b.Perdidas : 0, 0)
            _d.Perdidas = sumLinea
            return _d
        })
        let pie = sumPerdidas.map((element) => ({ value: element.Perdidas, name: `${element.Linea}-${element.TipoConsumo}` }))
        setDataPie(pie)
    }
    const handleGetHistTramosFroClient = () => {
        setLoading(true)
        getTramosTramosForClient({ fechainicial: fechainicial, fechafinal: fechafinal })
            .then((data) => {
                setData(data)
                handleDataPie(data)
                setLoading(false)
            })
    }
    useEffect(() => {
        handleGetHistTramosFroClient()
    }, [])

    return (
        <Container>
            {
                loading ? <Loader /> :
                    <>
                        <Row className="d-flex align-items-center">
                            <Col>
                                <CardFromDate onPress={handleGetHistTramosFroClient} />
                            </Col>
                            <Col>
                                <PaintPieGraph data={dataPie} />
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                {data && <PaintHistories data={data} columns={columnsTramosClient} />}
                            </Col>
                        </Row>
                    </>
            }
        </Container>
    )
};

export default TramosForClient;