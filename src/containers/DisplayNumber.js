import React, { Component } from 'react'
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class DisplayNum extends Component{



    render(){

        return(
            <h2>{this.props.Counter}</h2>
        )

    }
}

function mapStateToProps(state){
    return {
        Counter: state.Counter
    }
}

export default connect(mapStateToProps)(DisplayNum)