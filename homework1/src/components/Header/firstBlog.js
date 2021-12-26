import React, { Component } from 'react'

class firstBlog extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-6 first-blog">
                <div className="blog-tittle">
                    <h1>01</h1>
                    Contact
                </div>
                <div className="blog-content">
                    <p className="name">
                        Adress :
                    </p>
                    <p className="body">
                    77/sevent Streeth<br></br>USA. Zip 4500.
                    </p>
                </div>
                <div className="blog-content">
                    <p className="name">
                        Phone :
                    </p>
                    <p className="body">
                    +88092 (1) 5184203<br></br>+00 (22) 225455565
                    </p>
                </div>
                <div className="blog-content">
                    <p className="name">
                        Email :
                    </p>
                    <p className="body">
                        info@devitems.com<br></br>devitems@email.com
                    </p>
                </div>
            </div>
        )
    }
}

export default firstBlog
