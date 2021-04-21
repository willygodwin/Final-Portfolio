import React from 'react';

function SectionContainer(props) {
    return(
        <section style={{height:'100vh', position: 'relative', textAlign:'left'}}>
            {props.children}
        </section>
    )
}

export default SectionContainer