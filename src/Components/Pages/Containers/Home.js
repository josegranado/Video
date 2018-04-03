import React, { Component } from 'react';
import HomeLayout from '../Layout/HomeLayout.js';
import Categories from '../../Categories/Categories';
import Related from '../Related/Related';
import ModalContainer from '../../../Widgets/Containers/ModalContainer';
import Modal from '../../../Widgets/Modal/Modal';
class Home extends Component
{
    state = {
        modalVisible: false
    }
    handleCloseModalClick = event =>
    {
        this.setState({
            modalVisible: false,
        })
    }
    handleOpenModal = () =>
    {
        this.setState({
            modalVisible: true,
        })
    }
    render ()
    {
        return (
            
           <HomeLayout>
              <Related />
              <Categories 
                categories={this.props.data.categories}
                handleOpenModal={this.handleOpenModal}    
            />
              { 
                  this.state.modalVisible &&
                <ModalContainer>
                    <Modal
                         handleClick={this.handleCloseModalClick}
                    >
                    <h1> Esto es un portal</h1>
                    </Modal>
              </ModalContainer>
              }
           </HomeLayout> 
        );
    }
}
export default Home;