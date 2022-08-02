import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div>
                <div className="card mt-3" style={{ width: "21rem" }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: '90%', zIndex: '1'}}>
                        {source}
                    </span>
                    <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/photo-1552820728-8b83bb6b773f_0-647x363.jpeg?COngOrwlZX8Uv7ddTgsvhTOW3LnE86nl" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem