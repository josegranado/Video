import React, { Component } from 'react';
import HomeLayout from '../Layout/HomeLayout.js';
import Categories from '../../Categories/Categories';
import Related from '../Related/Related';
import ModalContainer from '../../../Widgets/Containers/ModalContainer';
class Home extends Component
{
    render ()
    {
        return (
            
           <HomeLayout>
              <Related />
              <Categories categories={this.props.data.categories}/>
              <ModalContainer>
                <h1> Esto es un portal </h1>
              </ModalContainer>
           </HomeLayout> 
        );
    }
}
export default Home;