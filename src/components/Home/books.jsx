import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BookImgCard from './BookImgCard';
import BookCard from './BookCard';
import './bookCardStyle.css';
export class Books extends Component {
    static defaultProps ={
        genera :'sci-fi',
        pageSize:10 ,
    }
    static propTypes={
        genera: PropTypes.string,
        category: PropTypes.string,
        pageSize:PropTypes.number,
    }
    constructor() {
        super();
        this.state = {
            articles: this.articles,      
        }
    }
    render() {
        return (
            <div className='container my-3 '>
                <h1 className='text-center generaTitle'>{this.props.genera}  books</h1>
                <div className="row">
                <div className="col-md-4">
                    <BookCard title={"wings of fire"} author={"abj "} description={"dhfsdjhsdjh"}  imageurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4aDYuNuEj0MQ0GLYrK1SJWOVkQEQHxjZ-7s50XkqOQ02IXFKxzl0MC5eE-tSPE1OwQc&usqp=CAU"}  bookurl={"sd"} />
                    </div>
                <div className="col-md-4">
                    <BookCard title={"wings of fire"} author={"abj "} description={"dhfsdjhsdjh"}  imageurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4aDYuNuEj0MQ0GLYrK1SJWOVkQEQHxjZ-7s50XkqOQ02IXFKxzl0MC5eE-tSPE1OwQc&usqp=CAU"}  bookurl={"sd"} />
                    </div>
                <div className="col-md-4">
                    <BookCard title={"wings of fire"} author={"abj "} description={"dhfsdjhsdjh"}  imageurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4aDYuNuEj0MQ0GLYrK1SJWOVkQEQHxjZ-7s50XkqOQ02IXFKxzl0MC5eE-tSPE1OwQc&usqp=CAU"}  bookurl={"sd"} />
                    </div>
                <div className="col-md-4">
                    <BookCard title={"wings of fire"} author={"abj "} description={"dhfsdjhsdjh"}  imageurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4aDYuNuEj0MQ0GLYrK1SJWOVkQEQHxjZ-7s50XkqOQ02IXFKxzl0MC5eE-tSPE1OwQc&usqp=CAU"}  bookurl={"sd"} />
                    </div>
                </div>
                <div className='conatiner d-flex justify-content-between '>
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrev} className="btn btn-danger"> &larr;Prev</button>
                    <button type="button" onClick={this.handleNext} class="btn btn-warning" disabled={Math.ceil(this.totalresults / 15) < this.state + 1
                    }> Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default Books;
