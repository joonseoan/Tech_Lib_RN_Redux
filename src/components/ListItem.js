import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

export default ({ library }) => {
    console.log(library)
    const { title } = library.item;
    return(
        <CardSection>
           <Text>{ title }</Text> 
        </CardSection>
    );
}