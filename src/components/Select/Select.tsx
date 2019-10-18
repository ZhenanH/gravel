import React from 'react';
import {Select as AntSelect} from 'antd';
import PropTypes from 'prop-types';


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
    
    dropdownPlacement:PropTypes.string,
    
}

export const  Option = (props:any)=> {
    return (
        <AntSelect.Option {...props}/>
    );

}


