/**
 * Author: GuoXC
 * Date: 2018-08-16 14:45
 * des:
 */
import React, {Component} from 'react';
import {
    View, ActivityIndicator,
    Modal,
} from 'react-native';
import {connect} from 'react-redux';
import * as Types from "../common/LoginTypes";

class LoadingSpinner extends Component<Props> {
    constructor(props) {
        super(props);
        // const {isVisible} = this.props;
        // this.state = {
        //     isVisible: isVisible,
        // }
    }

    render() {
        const {isVisible} = this.props;
        // const {onClosed} = this.props;
        return (
            <Modal
                transparent={true}
                onRequestClose={() => {
                    console.log('LoadingSpinner---onRequestClose');
                    // if (this.props.onRequestClose()) {
                    //     this.props.onRequestClose();
                    // } else {
                    //     this.setState({
                    //         isVisible: false,
                    //     });
                    // }
                    // if (onClosed) {
                    //     onClosed();
                    // }
                }}
                visible={isVisible}
                animationType={'fade'}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 80,
                        height: 80,
                        backgroundColor: '#333',
                        borderRadius: 10
                    }}>
                        <ActivityIndicator size='large' color='white'/>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default connect(
    (state) => ({
        isLoading: state.loginIn.isLoading,
    }),
    (dispatch) => ({
        // onClosed: () => {
        //     dispatch({
        //         type: '',
        //         isLoading: false,
        //     });
        // }
    })
)(LoadingSpinner)
// module.exports = LoadingSpinner;