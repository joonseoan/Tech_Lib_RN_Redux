import React from 'react';
// TouchableWithoutFeedback to use animation.
// Do not use this component unless it has a specific reason.
import { Text, 
         TouchableWithoutFeedback, 
         View, 
         LayoutAnimation,
         UIManager } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {

    // It is not working!! It is an alternative only for componentDidUpdate
    // React.useEffect(() => {
    //    // UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    //    UIManager.setLayoutAnimationEnabledExperimental(true);   
    //    LayoutAnimation.spring();
    // }, []);

    // getDerivedStateFromProps can be replaced with "componentWillReceiveProps"
    // Defalt state value should exists
    state = {};

    static getDerivedStateFromProps = (props, state) => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
        return null;
    } 

    renderDescription = () => {
        // Only case that props.expanded === true
        if(this.props.expanded) {
            const { description } = this.props.library.item;
            return(
                <CardSection>
                    <Text style={{ flex: 1 }}>{ description }</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { title, id } = this.props.library.item;
        const { titleStyle } = styles;

        return(
            <TouchableWithoutFeedback
                onPress={ () => { this.props.selectedLibrary(id) }}
            >
                <View>
                    <CardSection>
                        <Text
                            style={ titleStyle }
                        >
                            { title }
                        </Text> 
                    </CardSection>
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        );

    }

    



    
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = ({ selectedLibraryId }, ownProps) => {
    // In this component, ownProps = library
    // OwnProps does not contain the "selectedId"
    console.log('ownProps: ', ownProps);

    // define true or false about expanded sapce for "description"
    const expanded = selectedLibraryId === ownProps.library.item.id;
    return { expanded };

    // 1)
    // return { selectedId: selectedLibraryId };
}

// containing all actions
export default connect(mapStateToProps, actions)(ListItem);