import React from 'react';
import {Select as AntSelect} from 'antd';
import PropTypes from 'prop-types';

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export const  Select = (props:any)=> {
       let _props = {...props};
        if(props.dropdownPlacement === 'right')
        {
            
             /**
              align top right point of sourceNode with bottom right point of targetNode
              reference: https://github.com/yiminghe/dom-align
            */
            _props.dropdownAlign={
                points: ['tr', 'br'],
                overflow: false,
            };
        };  

       
        
        return (
            <AntSelect {..._props}/>
        );
    
}

Select.propTypes = {
     /**
    Use the loading state to indicate that the data Avatar needs is still loading.
    */
    dropdownPlacement:PropTypes.string,
    
}

export const  Option = (props:any)=> {
    return (
        <AntSelect.Option {...props}/>
    );

}


