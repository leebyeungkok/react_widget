import React, {useEffect, useState} from 'react';
const Table = ({ opt, 
                  label, 
                  value, 
                  setValue,
                  header,
                  data,
                  handlerRowClick
                }) => {

  const [compStyle, setCompStyle] = useState({});

  useEffect(() => {
    console.log('opt', opt, value);
    let tempCompStyle = JSON.parse(JSON.stringify(compStyle));

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
      if(opt.flex !== undefined)
        tempCompStyle.alignItems =  opt.flex;
      if(opt.width !== undefined)
        tempCompStyle.alignItems =  opt.width + 'px';         
 
    }
    setCompStyle(tempCompStyle);
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

  const handlerTableRowClick = (event, row, index) => {
    console.log(row, index);
    if(handlerRowClick !== undefined)
      handlerRowClick(event, row, index);
  }
  
  const renderHeader = () => {
    const result =[];
    for(let i=0; i < header.length; i++ ){
      const item = header[i];
      result.push(
        
          <th key={i} style={{textAlign:item.align}} className="w3-light-grey">
            {item.text || ''}
          </th>
        );
    }
    return result;
  }
  const renderTd = (row) =>{
    const result = [];
    for(let j=0; j < header.length; j++){
      const rowHeader = header[j];
      result.push(<td key={j} >{row[header[j].name]}</td>)
    }
    return result;
  }
  const addRowClass = (event) => {
    console.log('add');
    event.target.parentNode.classList.add('row-color-change');
  }
  const removeRowClass = (event) => {
    event.target.parentNode.classList.remove('row-color-change');
  }
  const renderTr = (row, index) => {
    const result = [];
      result.push(
        <tr 
          key={index} 
          onClick={(event)=>{handlerTableRowClick(event, row, index)}}
          onMouseOver={(event)=>{addRowClass(event)}}
          onMouseOut={(event)=>{removeRowClass(event)}}>
        {renderTd(row)}
        </tr>);
    
    return result;
  }
  const renderData = () =>{
    const result = [];
    for(let i=0; i < data.length; i++ ){
      let row = data[i]
      result.push(renderTr(row, i));
    }
    return result;
  }
  return (
    <table className="w3-table-all">
      <thead>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}
export default Table;