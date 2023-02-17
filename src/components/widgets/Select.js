import React, {useEffect, useState} from 'react';
const Select = ({ opt, 
                  label, 
                  value, 
                  setValue,
                  keyField,
                  displayField,
                  data,
                  handlerChange, 
                  handlerFocus, 
                  handlerBlur, 
                  handlerKeyDown, 
                  handlerKeyUp}) => {

  const [labelStyle, setLabelStyle] = useState({});
  const [inputStyle, setInputStyle] = useState({});
  const [compStyle, setCompStyle] = useState({});
  //const [inputValue, setInputValue] = useState('');
  //const [labelValue, setLabelValue] = useState('');

  let inputType = 'text';
  let labelSeperator = ':';
  useEffect(() => {
    console.log('opt', opt, value);
    let tempCompStyle = JSON.parse(JSON.stringify(compStyle));
    let templabelStyle = JSON.parse(JSON.stringify(labelStyle));
    let tempInputStyle = JSON.parse(JSON.stringify(inputStyle));
    if(opt !== undefined){
      // component 
      if(opt.display === undefined)
        tempCompStyle.display = 'flex';
      else 
        tempCompStyle.display = opt.display;
      if(opt.displayDirection === undefined)
        tempCompStyle.displayDirection = 'row';
      else 
        tempCompStyle.displayDirection = opt.displayDirection;        
      if(opt.alignItems === undefined)
        tempCompStyle.alignItems = 'center';
      else 
        tempCompStyle.alignItems = opt.alignItems;        
      if(opt.flex !== undefined)
        tempCompStyle.alignItems =  opt.flex;
      if(opt.width !== undefined)
        tempCompStyle.alignItems =  opt.width + 'px';         
      // label
      if(opt.labelWidth !== undefined)
        templabelStyle.width = opt.labelWidth + 'px';
      if(opt.labelAlign !== undefined)
        templabelStyle.textAlign = opt.labelAlign;
      if(opt.labelVisibility !== undefined){
        templabelStyle.visibility = opt.labelVisibility;
      }
      if(opt.labelSeperator !== undefined)
        labelSeperator = opt.labelSeperator;
      // input
      if(opt.inputWidth !== undefined && opt.inputFlex !== undefined){
        console.log(opt.inputWidth, ':', opt.inputFlex, '*** inputWidth &&  inputFlex --> inputWidth first !!!')
        opt.inputFlex = undefined;
      }
      if(opt.inputWidth !== undefined)
        tempInputStyle.width = opt.inputWidth;
      if(opt.inputFlex !== undefined){
        tempInputStyle.flex = opt.inputFlex;
      }
      if(opt.inputMinWidth != undefined){
        tempInputStyle.minWidth = opt.inputMinWidth;
      }
      if(opt.inputTextAlign != undefined){
        tempInputStyle.textAlign = opt.inputTextAlign;
      }
      if(opt.type !== undefined)
        inputType = opt.type;
    }
    setCompStyle(tempCompStyle);
    setLabelStyle(templabelStyle);
    setInputStyle(tempInputStyle);
  },[opt])
  /*
  useEffect(() => {
    console.log('value', value);
    if(value !== null){
      setInputValue(value);
    }
    
  },[value])
  */
  const getValue = () => {
    return value;
  }
  const setData = () => {

  }
  // setValue는 상위에서 useState 구현.
  const handlerInputChange = (event) => {
    //setInputValue(event.target.value);
    setValue(event.target.value);
    console.log('-=>', handlerChange);
    if(handlerChange !== undefined)
      handlerChange(event);
  }
  const handlerInputFocus = (event) => {
    if(handlerFocus !== undefined)
      handlerFocus(event);
  }
  const handlerInputBlur = (event) => {
    if(handlerBlur !== undefined)
    handlerBlur(event);
  }
  const handlerInputKeyDown = (event) => {
    if(handlerKeyDown !== undefined)
    handlerKeyDown(event);
  }
  const handlerInputKeyUp = (event) => {
    if(handlerKeyUp !== undefined)
    handlerKeyUp(event);
  }
  return (
    <div className="form-div-basic" style={compStyle}>
      <label 
        style={labelStyle}
      >{label}<div className="seperator" style={{float:'right'}}>{labelSeperator}</div></label>
      
      <select 
        style={inputStyle} 
        type={inputType} 
        value={value} 
        onChange={handlerInputChange}
        onFocus={handlerInputFocus}
        onBlur={handlerInputBlur}
        onKeyDown={handlerInputKeyDown}
        onKeyUp={handlerInputKeyUp}>
        {data.map(item=>{
          console.log('key', item, keyField, item[keyField], item[displayField])
          return(<option key={item[keyField]} value={item[keyField]}>{item[displayField]}</option>);
        })}
      </select>
    </div>
  )
}
export default Select;