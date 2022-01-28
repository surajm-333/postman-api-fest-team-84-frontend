import React, { Component } from 'react';

class BookCard extends Component {
    // state = {  } 
    render() { 
        let {title,author,description,imageurl,bookurl}= this.props 
        return (
            <div>
                <div className="card mb-3" style={{width: "100%"  }} >
  <div className="row g-0">
    <div className="col-md-4">
      <a href=""> <img src={imageurl} className="img-fluid rounded-start" alt="..."/> </a>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <a href="" style={{textDecoration:"none"}}><h5 className="card-title" >{title}</h5></a>
        <p className="card-text" style={{color:"green"}}>{author} </p>
        <p className="card-text"><small className="text-muted">{description}</small></p>
        <a href=""><button type="button" class="btn btn-danger">Download</button></a>
      </div>
    </div>
  </div>
</div>
            </div>
        );
    }
}
 
export default BookCard;