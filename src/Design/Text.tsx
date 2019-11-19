import React from 'react';
import {theme} from './Theme';


class Text extends React.Component {
 
    render() {
      //console.log(theme);
      return (
        <div className ="doc-container">
        <h1>Heading</h1>
        <h1 style={{color:theme.font.color.heading}}>H1</h1>
        <h2 style={{color:theme.font.color.heading}}>H2</h2>
        <h3 style={{color:theme.font.color.heading}}>H3</h3>
        <h4 style={{color:theme.font.color.heading}}>H4</h4>
        <h5 style={{color:theme.font.color.heading}}>H5</h5>
        <h6 style={{color:theme.font.color.heading}}>H6</h6>

        <h1 style={{marginTop:32}}>Text Color</h1>
        <div style={{color:theme.font.color.primary,background:"white",padding:5}}>Primary</div>
        <div style={{color:theme.font.color.secondary,background:"white",padding:5}}>Secondary</div>
        <div style={{color:theme.font.color.tertiary,background:"white",padding:5}}>Tertiary</div>
        <div style={{color:theme.font.color.light, background:"black",padding:5}}>Light</div>

        <h1 style={{marginTop:32}}>Text Size</h1>
        <div style={{fontSize:theme.font.size.xxl}}>XXL: 24px</div>
        <div style={{fontSize:theme.font.size.xl}}>XL: 18px</div>
        <div style={{fontSize:theme.font.size.lg}}>LG: 16px</div>
        <div style={{fontSize:theme.font.size.base}}>Base: 14px</div>
        <div style={{fontSize:theme.font.size.sm}}>Small: 12px</div>

        </div>
      );
    }
}

export default Text;