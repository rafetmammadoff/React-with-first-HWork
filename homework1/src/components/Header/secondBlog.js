import React, { Component } from 'react'

class SecondBlog extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-6 second-blog">
                <div className="blog-tittle">
                    <h1>{this.props.h1}</h1>
                    {this.props.tittle}
                </div>
                <div className="blog-content">
                    <p>About VoIP</p>
                    <p>About Our Service</p>
                    <p>Out Bulk SMS Service</p>
                    <p>Online Support</p>
                    <p>Cloud Storage</p>
                </div>
                
            </div>
        )
    }
}

export default SecondBlog
