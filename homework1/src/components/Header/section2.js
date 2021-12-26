import React, { Component } from 'react'
import Card from './card'
import table from '../../assets/img/table.webp'
import tableBlue from '../../assets/img/table-blue.webp'


class Section2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <Card name="Basic Plan" price="22.00/mo" backgroundImage={table} color="#263238" border="1px solid black" textDecoration="line-through" />
                    <Card name="Silver Plan" price="33.00/mo" backgroundImage={tableBlue} color="#0091ea" border="1px solid #0091ea" textDecoration="line-through"/>
                    <Card name="Gold Plan" price="66.00/mo" backgroundImage={table} color="#263238" border="1px solid black" />
                    <Card name="Platinium Plan" price="99.00/mo" backgroundImage={table} color="#263238" border="1px solid black"/>
                    
                </div>
            </div>
        )
    }
}

export default Section2
