import React, {useState, useEffect} from 'react';
import CheckboxGroup from '../components/widgets/CheckboxGroup';
const CheckboxGroupTest = () => {
  const [value, setValue] = useState(['3', '5']);
  const [data, setData] = useState([{key:'1', name:'홍길동'},
  {key:'2', name:'이순신'},
  {key:'3', name:'임꺽정'},
  {key:'4', name:'을지문덕'},
  {key:'5', name:'강감찬'},
  {key:'6', name:'계백'}]);

  const setChangeData = () =>{
    const tempData = [... data, {key:'7', name:'김유신'}]
    setData(tempData);
  }
  return (
    <div >
      <CheckboxGroup 
        label = '제목' 
        value = {value} 
        setValue={setValue}
        data = {data}
        keyField = "key"
        displayField = "name"
        opt={{labelWidth:100, flex:1, inputFlex:1}}
      />
      <br/>
      <button type="button" onClick={setChangeData}>데이터추가</button>
      <button type="button" onClick={()=>{setValue(['1','3'])}}>값설정</button>
      <button type="button" onClick={()=>{console.log('값읽기' + value)}}>값읽기</button>
    </div>
  );
}

export default CheckboxGroupTest;