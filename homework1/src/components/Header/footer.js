import React, { Component } from 'react'
import FirstBlog from './firstBlog'
import SecondBlog from './secondBlog'

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <FirstBlog />
                    <SecondBlog tittle="Information" h1="02" />
                    <SecondBlog tittle="Support" h1="03" />
                    <SecondBlog tittle="Why Air.IP" h1="04" />
                </div>
            </div>
        )
    }
}

export default Footer
