import React from 'react'
import {Row, Col} from 'antd'
import './estilo/spiderdata.css'

const SpiderData = () => {
    return (
        <Row>
            <Col xl={4} md={4} sm={4} xs={4}></Col>
            {
                [{},{},{},{}].map((data, posicion) => {
                    return (
                        <Col xl={4} md={4} sm={4}>
                            <div className={posicion == 0 ?"contenedorBloque" :"contenedorBloquePlomo"}>
                                <a href='https://growanalyticscom.sharepoint.com/sites/kimberly-clark/_layouts/15/download.aspx?UniqueId=1fc330a1-dae2-44e5-94c1-132aab377260' download>Descarga Spider Data {posicion+1}</a>
                            </div>
                        </Col>
                    )
                })
            }
            <Col xl={4} md={4} sm={4} xs={4}></Col>
        </Row>
    )
}

export default SpiderData
