import React from 'react';
import './Content.css';
import Data from '../../Data'
import Card from '../card/Card'

function Content(props) {

    let menu = props.number
    let finalData = Data.filter(element => element.address === menu)

    return (
        <nav className="content">
            {finalData.map((element) => (
                <Card key={element.id} image={element.image} title={element.title} link={element.link} />
            ))}
        </nav>
    )
}

export default Content
