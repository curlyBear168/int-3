import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

import Footer from '../components/Footer/Footer';
//import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import BVCHomeMint from '../components/BVCGuy/mintPageHome';
import Info from '../components/info/info'
import Roadmap from '../components/info/roadmap'
import Team from '../components/info/team';
import { Provider } from "react-redux";
import RedexStore from'../redux/store';


class ThemeOne extends Component {
componentDidMount(){
    this.user = window.localStorage.getItem('loginWallet');
    console.log("componentDidMount = ??  ",this.user)
}


    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                <Info/>

                <Roadmap/>
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;