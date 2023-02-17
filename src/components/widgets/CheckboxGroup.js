import React, {useEffect, useState} from 'react';
const CheckboxGroup = ({ opt, 
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
    console.log(event.target.checked);
    const v = event.target.value;
    if(event.target.checked === true){
        setValue([...value, v || '']);
        console.log('t', value);
    } else {
      setValue(value.filter(val =>{
        return val !== v;
      }));
      console.log('f',value);
    }
    ;
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
  const rendering = () =>{
    const result = [];
    for(let i=0; i < data.length; i++ ){
      let exist =false;
      let item = data[i]
      for(let j=0; j < value.length; j++){
        if(item[keyField] == value[j]){
          exist = true;
          break;
        }
      }
      if(exist === true){
        result.push(
          <div key={i}  style={{display:'flex', displayDirection:'row', alignItems:'center'}}>
            <input type="checkbox" 
              checked
              value={item[keyField] || ''} 
              style={inputStyle} 
              onChange={handlerInputChange}
              onFocus={handlerInputFocus}
              onBlur={handlerInputBlur}
              onKeyDown={handlerInputKeyDown}
              onKeyUp={handlerInputKeyUp}
            />
            <div>{item[displayField]}</div> 
          </div>);
      } else {
        result.push(
          <div key={i}  style={{display:'flex', displayDirection:'row', alignItems:'center'}}>
            <input type="checkbox" 
              value={item[keyField] || ''}
              style={inputStyle} 
              onChange={handlerInputChange}
              onFocus={handlerInputFocus}
              onBlur={handlerInputBlur}
              onKeyDown={handlerInputKeyDown}
              onKeyUp={handlerInputKeyUp}
            />
            <div>{item[displayField]}</div> 
          </div>);
      }
    }
    return result;
  }
  return (
    <div className="form-div-basic" style={compStyle}>
      <label 
        style={labelStyle}
      >{label}<div className="seperator" style={{float:'right'}}>{labelSeperator}</div></label>
    
      {rendering()}

    </div>
  )
}
export default CheckboxGroup;