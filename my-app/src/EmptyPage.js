import React from 'react';

import Content from './Content';

function EmptyPage() {
    return (
        <Content>
            <div style={{
                margin: "auto"
            }}>
                <h1 style={{
                    fontSize: "250px",
                    margin: 0,
                    marginLeft: "50%",
                    transform: "translate(-50%)"
                }}>
                    404
                </h1>
                <h2 style={{
                    fontSize: "50px",
                    margin: 0,
                    marginLeft: "50%",
                    transform: "translate(-50%)"
                }}>
                    PAGE NOT FOUND
                </h2>
            </div>
        </Content>  
    );
}

export default EmptyPage;