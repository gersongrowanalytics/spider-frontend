import React from 'react'
import AppCanalTradicional from '../App/index'

const index = () => {
    return (
        <div>
            <AppCanalTradicional/>
            <div style={{marginLeft:'-30px', position: 'relative'}}>
                <iframe
                    width="103%"
                    height="1150"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNjJhZTQzNWEtODdlZi00YjdjLWE0ZjEtYjZiMjgxNjAxNzEyIiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
                    // src="https://app.powerbi.com/view?r=eyJrIjoiY2JmOGIwNzMtYTc5NC00NTc3LWE3NGUtYzBiOGFmYmIwYjU5IiwidCI6IjFkZjQ2ODhjLWI5MTUtNDEwMy05OGMwLTNhMzY4ZmIyOTNlOCJ9"
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
