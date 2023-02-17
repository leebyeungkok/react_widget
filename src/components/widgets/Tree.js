import React, {useEffect, useState, useRef} from 'react';
const Tree = ({ opt, 
                  value, 
                  setValue,
                  keyField,
                  displayField,
                  expand,
                  setExpand,
                  shrink,
                  setShrink,
                  data,
                  handlerRowClick
                }) => {

  const [compStyle, setCompStyle] = useState({});
  const refUl = React.createRef();
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

  useEffect(() => {
    if(expand == false){
      return;
    }
    expandAll();
  },[expand])
  useEffect(() => {
    if(shrink ==false){
      return;
    }
    shrinkAll();
  },[shrink])
  const getValue = () => {
    return value;
  }
  const setData = () => {

  }
  // setValue는 상위에서 useState 구현.

  const expandAll = () => {
    
    let folders = refUl.current.querySelectorAll('[folder=true]');
    for(let i = 0;i < folders.length; i++){
        if(folders[i].querySelector('ul') != undefined){
            folders[i].querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(../img/expand.png)');         
            folders[i].querySelector('ul').style['display'] = 'block';
        }
    }
    setShrink(false);
  }
  const shrinkAll = () => {
    let folders = refUl.current.querySelectorAll('[folder=true]');
    for(let i = 0;i < folders.length; i++){
        if(folders[i].querySelector('ul') != undefined){
            folders[i].querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(../img/shrink.png)');         
            folders[i].querySelector('ul').style['display'] = 'none';
        }
    }
    setExpand(false);
  }

 
  const addRowClass = (event) => {
    console.log('add');
    event.target.parentNode.classList.add('row-color-change');
  }
  const removeRowClass = (event) => {
    event.target.parentNode.classList.remove('row-color-change');
  }
  
  const renderChild = (d) => {
    const result = [];

    if(d.children === undefined){
      
    } else {
      result.push(
        <ul style={{marginLeft:'20px'}}>
          {renderData(d)}
        </ul>
      )
    }
    return result;
  }
  const onClickTreeItem = (event) => {
    console.log('item');
  }
  const onClickTreeFolder = (event) => {
    if(setShrink !== undefined)
      setShrink(false);
    if(setExpand !== undefined)
      setExpand(false);
    let me = event.target;
    console.log('foler', me, me.tagName);
    if(me.tagName === 'LI' || me.tagName === 'li'){
      console.log('click LI');
      return;
    }
    if(me.getAttribute('item') != 'true'){
      me = me.parentNode;
    }
    console.log('tagName',me.tagName)
    console.log('me', me);
    let tempUl = me.parentNode.querySelector('ul');
    console.log('tempUl',me.parentNode, tempUl);
    if(tempUl != undefined){
        if(tempUl.style.display == 'none'){
          console.log('1me', me, me.parentNode);
            me.parentNode.querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(../img/expand.png)');
            tempUl.style['display'] = 'block';
        } else {
            console.log('2me', me, me.parentNode);
            me.parentNode.querySelector('div[icon=true]').setAttribute('style', 'width:10px;height:10px;margin:5px 5px 0 5px;background-size:cover;background-image:url(../img/shrink.png)');
            tempUl.style['display'] = 'none';
        }
    } else {
        // 폴더가 아님.
        // 여러분의 이벤트나 일반 사용자 이벤트를 만들어 사용할것.
    }
  }
  const renderData = (d) =>{
    const result = [];
    if(d.children == undefined){
        return [];
    }
    for(let i=0; i < d.children.length; i++){
      const item = d.children[i];
      // folder
      if(item.children !== undefined){
        result.push(
          <li folder="true" style={{listStyle:'none',width:'100%'}}>
            <div item="true" style={{display:'flex', displayDirection:'row'}}
              onClick={(event)=>{onClickTreeFolder(event)}}
            >
              <div icon="true" style={{width:'10px', height:'10px', margin:'5px 5px 0 5px', backgroundSize:'cover', backgroundImage:'url(../img/expand.png)'}} >
              </div>
              <span>
                {item[displayField]}
              </span>
            </div>
            {renderChild(item)}
          </li>)
      } else {  // item
        result.push(
          <li folder="true" style={{listStyle:'none',width:'100%'}}>
            <div style={{display:'flex', displayDirection:'row'}}
            onClick={(event)=>{onClickTreeItem(event)}}
            >
              <div icon="true" style={{width:'10px', height:'10px', margin:'5px 5px 0 5px', backgroundSize:'cover'}}>
              </div>
              <span>
                {item[displayField]}
              </span>
            </div>
            {renderChild(item)}
          </li>)

      }
    }
    return result;
  }
  return (
    <ul className="tree" ref={refUl}>
      {renderData(data)}
    </ul>
  )
}
export default Tree;