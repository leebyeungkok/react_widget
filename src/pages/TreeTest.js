import React, {useState, useEffect} from 'react';
import Tree from '../components/widgets/Tree';
const TreeTest = () => {
  const [value, setValue] = useState(['3', '5']);
  const [expand, setExpand] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [data, setData] = useState( {
    children:[
    {
      key:'1', name:'동물', folder:true,
      children:[{
        key:'11', name:'포유류',
        children:[{
          key:'11', name:'사자'
        },{
          key:'12', name:'호랑이'
        },{
          key:'12', name:'개과',
          children:[{
            key:'121', name:'개'
          },{
            key:'122', name:'늑대'
          }]
        }],
      }]
    },{
      key:'2', name:'식물', folder:true,
      children:[{
          key:'21', name:'나팔꽃'
      },{
          key:'12', name:'호박꽃'
      }]
    }]
  });

  const handlerExpandAll = () => {
    setExpand(true);
  }
  const handlerShrinkAll=() =>{
    setShrink(true);
  }
  return (
    <div >
      <Tree 
        value = {value} 
        setValue={setValue}
        data = {data}
        keyField = "key"
        displayField = "name"
        expand={expand}
        setExpand={setExpand}
        shrink={shrink}
        setShrink={setShrink}
        opt={{flex:1}}
      />
      <br/>
      <button type="button" onClick={handlerExpandAll}>모두펼치기</button>
      <button type="button" onClick={handlerShrinkAll}>모두접기</button>
      
    </div>
  );
}

export default TreeTest;