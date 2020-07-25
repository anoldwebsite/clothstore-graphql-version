import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = ComponentToWrapWithSpinner => ( ({isLoading, ...otherProps}) => {
    return isLoading
        ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
        : (
            <ComponentToWrapWithSpinner {...otherProps} />
        )
});
export default WithSpinner;