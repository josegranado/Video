import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Media.css';

class Media extends PureComponent
{
   
    constructor (props) 
    {
        super(props)
        //ECS6 this.handleClick = this.handleClick.bind(this);
        this.state = {
            author: props.author
        }
    }
    /*
    handleClick (ev)
    {
        console.log(ev)
    }
    */
   handleClick = ev => {
       this.setState({
           author: 'Ricardo Celis',

       })
   };
   
    render ()
    {   
        
        return (
            <div className="Media card" onClick={this.handleClick}>
                <div>
                    <img
                        className="card-img-top"
                        src={ this.props.cover }
                        alt=""
                        width={260}
                        height={160}
                    />
                    <div className="card-body">
                        <h5 className="card-title"> { this.props.title } </h5>
                        <p className="card-text"> { this.props.author } </p>
                        <div className="buttons text-center widthAll">
                            <a className="btn firstColor text-white widthHalf"><i className="far fa-play-circle"> </i> </a>
                            &nbsp;
                            <a className="btn secondColor text-white widthHalf"><i className="fas fa-share"> </i> </a>
                        </div>
                    </div>
                </div> 
            </div> 
        )
    }
}
Media.propTypes = 
{
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string
}

//PropTypes.oneOf(['audio', 'video' ])
export default Media;