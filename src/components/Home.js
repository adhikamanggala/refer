import React, { Component } from 'react';
import Carousel from './Carousel';
import Content from './Content';

class Home extends Component {
    render () {
        return (
            <div>
                <Carousel/>
                <br></br>
                <br></br>
                <Content/>
            </div>
        )
    }
}
export default Home;