import React from 'react';
import {theme} from './Theme';

const colorBlock = (name:string,value:string,dark:boolean)=><div 
style={{margin:"12px 24px 24px 0", flexDirection:'column',color:dark?'black':'white',width:150,height:100,background:value,display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
<div>{name}</div>
<div>{value}</div>
</div>
class Color extends React.Component {
 
  render() {
    //console.log(theme);
    return (
      <div className ="doc-container">
        <h1>Color</h1>
        <div>
          <h2>Button States</h2>
          {colorBlock("Primary",theme.colors.primary,false)}
          {colorBlock("Normal",theme.colors.normal,false)}
          {colorBlock("Disabled",theme.colors.disabled,false)}
          
        </div>

        <div>
          <h2>Feedbacks</h2>
          {colorBlock("Info",theme.colors.info,false)}
          {colorBlock("Success",theme.colors.success,false)}
          {colorBlock("Warning",theme.colors.warning,false)}
          {colorBlock("Caution",theme.colors.caution,false)}
          {colorBlock("Error",theme.colors.error,false)}   
          
        </div>
      
        <div>
          <h2>Hover</h2>
          {colorBlock("Default",theme.colors.hover.default,true)}
          {colorBlock("Secondary",theme.colors.hover.secondary,true)}
          
        </div>

        <div>
          <h2>Shawdow</h2>
          {colorBlock("Default",theme.colors.shadow.default,true)}
          {colorBlock("Medium",theme.colors.shadow.medium,true)} 
          {colorBlock("Light",theme.colors.shadow.light,true)}
          {colorBlock("Lightest",theme.colors.shadow.lightest,true)}
        </div>
      </div>
    );
  }

}

export default Color;