import React from 'react';
import {Button, Card, Icon , Tooltip} from 'antd';
//import PropTypes from 'prop-types';


export const ContentContainer = (props:any)=> {

        return (
            <div style={{marginLeft:"auto",marginRight:"auto",width: props.childrenType==="form"?976:"auto",minWidth:976}}>
                <Card
             bodyStyle = {props.style}
             title={
                    <div>
                        <div style={{fontSize:16}}>{props.title} {props.info?<Tooltip title={props.info}><Icon style={{fontSize:14}} type="info-circle"/></Tooltip>:null}</div>
                        <div style={{color:"rgba(0,0,0,0.45)", fontSize:14, fontWeight:400}}>
                            {props.subtitle?props.subtitle:null}
                        </div>
                    </div>
                    }
             type="inner"
             style={{ }}
             extra={props.action?<Button type="primary" icon="plus">{props.action}</Button>:null}>
             {props.childrenType}
             <br/>
             </Card>
             </div>
        );
    
}





