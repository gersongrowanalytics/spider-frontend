import React from 'react'

const ReportesGenerales = () => {
    return (
        <div>
            <div style={{marginLeft:'-30px', marginRight:'-30px', marginTop:'-30px', position: 'relative'}}>
                <iframe
                    width="100%"
                    height="1150"
                    src = "https://app.powerbi.com/reportEmbed?reportId=e43f52f2-4f18-49ca-831d-26658f48abe7&groupId=09198d65-76c4-4a4f-a116-f0ecf4a1f113&autoAuth=true&ctid=1df4688c-b915-4103-98c0-3a368fb293e8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9"
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

export default ReportesGenerales
