import React from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { activateAction, closeAction } from '../actions';

const ReduxTest = props => {
    return(

        <View>
            <View>
                <Text>{ props.docTest }</Text>
            </View>
            <View>
                <Button 
                    onPress={ () => props.activateAction('Activated!!!!')}
                    title="Activate!!!!"
                />
            </View>
            <View>
                <Button onPress={ () => props.closeAction('Closed!!!!')}
                    title="Close"   
                />
            </View>
        
        </View>
    );
}

const mapStateToProps = ({ docTest }) => {
    return { docTest };
}

export default connect(mapStateToProps, { activateAction, closeAction })(ReduxTest);