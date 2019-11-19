import React from 'react';
import {theme} from './Theme';

const colorBlock = (name:string,value:string,dark:boolean,height?:string,width?:string)=><div 
style={{margin:"12px 24px 24px 0", flexDirection:'column',color:dark?'black':'white',width:width?width:150,height:height?height:100,background:value,display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
<div>{name}</div>
<div>{height?"":value}</div>
</div>

class Navigation extends React.Component {
 
    render() {
      //console.log(theme);
      return (
        <div className ="doc-container">
        <h1>Body</h1>
        {colorBlock("Background",theme.layout.body.background,true)}

        <h1>Header & Footer</h1>
        {colorBlock("Header height: "+theme.layout.header.height+"px","lightgray",true,theme.layout.header.height,"100%")}
        {colorBlock("Header subheight: "+theme.layout.header.subHeight+"px","lightgray",true,theme.layout.header.subHeight,"100%")}
        {colorBlock("footer height: "+theme.layout.footer.height+"px","lightgray",true,theme.layout.footer.height,"100%")}
       
        <h1>Sidebar</h1>
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", color:"white",width:theme.layout.sidebar.width,backgroundColor:theme.layout.sidebar.background,height:300}}>
        {
            theme.layout.sidebar.width + " width"
        }</div>
        </div>
        
      );
    }
}

export default Navigation;