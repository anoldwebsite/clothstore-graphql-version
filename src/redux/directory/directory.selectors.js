/*
 We will write selectors in this file and these selectors will help us get 
 the slice of the state (the whole cake) that we need. 
*/
import {createSelector} from 'reselect';

//Get a slice (in this case directory) from the state/cake.
const selectDirectory = state => state.directory;

export const selectDirecotrySections = createSelector(
    //Here goes an array of our input selectors. We can write them without an array too.
    [selectDirectory], //Later on we can add more selectors if need be
    (directory) => directory.sections //This is the output of the selctor selectDirectory.
);