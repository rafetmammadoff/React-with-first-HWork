import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="my-card col-lg-3">
                <div className="tittle" style={{ backgroundImage: `url(${this.props.backgroundImage})`, backgroundColor: this.props.color}}>
                    <div className="text-area">
                        <p>{this.props.name}</p>
                        <h1>{this.props.price}</h1>
                        <span>Starting</span>
                    </div>
                </div>
                <div className="card-body">
                    <p>110 Calls to any country.</p>
                    <p style={{textDecoration:this.props.textDecoration}}>60 minute Free per month.</p>
                    <p style={{textDecoration:this.props.textDecoration}}>30+ Amazing Features.</p>
                    <p style={{textDecoration:this.props.textDecoration}}>200+ Bulk SMS.</p>
                    <p style={{textDecoration:this.props.textDecoration}}>Free Rollover Line.</p>
                    <p>VoIP Adapter Included.</p>
                    <div className="button-area">
                        <button className='btn' style={{border: this.props.border}}>SIGN UP</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Card
