import React from 'react';
// FlatList: ListView => return only subsets visible on the screen
// Example: When scoll up, the item in the top left the screen,
//  and that item is spotted in the bottom.
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';

import ListItem from './ListItem';


const LibraryList = props => {
    const renderItem = library => <ListItem library={ library } /> 
    

    return(
        <FlatList 
            // rendering all list
            data={ props.libraries }
            // how to render each individual library
            renderItem={ renderItem }
            // key: it is because map or list function is used under the scene.
            keyExtractor={ library => library.id }
        />
    );
}

const mapStateToProps = ({ libraries }) => {
    //console.log(libraries)
    return { libraries };
}

export default connect(mapStateToProps)(LibraryList);