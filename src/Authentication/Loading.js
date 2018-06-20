import React, { Component } from 'react';
import fire from './config/Fire';
import Center from 'react-center';
import ReactLoading from 'react-loading';
class Loading extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <Center>
            <ReactLoading type="bars" color="#1a8cff" height={200} width={200} />
    </Center>
    );
}
}
export default Loading;

