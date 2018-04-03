import React, {Component} from 'react';
import Playlist from '../Playlist/Playlist';
import './Category.css';


function Category (props)
{
    return (
        <div className="Category mt-2">
            <div className="Category-description">{ props.description } </div>
            <div className="Category-title">{ props.title }</div>
            
            <div className="Category-content">

                <Playlist
                    handleClick={props.handleOpenModal}
                    playlist={props.playlist}
                    key={props.id}
                />
            </div>
        </div>
    )
}
/*class Category extends Component
{
    constructor (props)
    {
        super(props);
    }
    render ()
    {
        const Category = this.props.data;
        console.log(Category)
        return (
            <div className="Category mt-2">
                <div className="Category-title">{ Category.title }</div>
                <div className="Category-description">{ Category.description } </div>
                <div className="Category-content"> 
                    <Playlist data={Category.playlist}/>
                </div>
            </div>
        )
    }
}
*/
export default Category;