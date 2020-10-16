import React from 'react'
import AppCanalTradicional from '../App/index'
import './distribuidora.css'

const index = () => {
    return (
        <div>
            <AppCanalTradicional/>
            <div style={{marginLeft:'-30px', position: 'relative'}}>
                <iframe
                    width="103%"
                    height="900"
                    src="https://app.powerbi.com/view?r=eyJrIjoiY2RhZjgwZmItZjJhYi00MTQ3LTkxYjktZjg3ODM3MWE2NzVjIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
                    frameborder="0"
                ></iframe>
                <div id="taparIzqcdistribuidora">
                    
                </div>
                <div id="taparDerechaCdistribuidora">

                </div>
            </div>
        </div>
    )
}

export default index
