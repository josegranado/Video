import React, { Component } from 'react';
import HomeLayout from '../Layout/HomeLayout.js';
import Categories from '../../Categories/Categories';
import Related from '../Related/Related';

class Home extends Component
{
    render ()
    {
        return (
            
           <HomeLayout>
              <Related />
              <Categories categories={this.props.data.categories}/>
           </HomeLayout> 
        );
    }
}
export default Home;