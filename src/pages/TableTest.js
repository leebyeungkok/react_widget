import React, {useState, useEffect} from 'react';
import Table from '../components/widgets/Table';
const TableTest = () => {
  const [value, setValue] = useState(['3', '5']);
  const [header, setHeader] = useState([
    { name:'num', text:'번호', align:'center', width:200},
    { name:'name', text:'이름', align:'center', width:200},
    { name:'addr', text:'주소', align:'center', flex:1}
  ])
  const [data, setData] = useState([
    { num:1, name:'홍길동', addr:'서울시 중랑구'},
    { num:2, name:'이순신', addr:'부산시 중랑구'},
    { num:3, name:'임꺽정', addr:'대전시 중랑구'},
    { num:4, name:'을지문덕', addr:'광주시 중랑구'},
    { num:5, name:'강감찬', addr:'대구시 중랑구'},
    { num:6, name:'계백', addr:'인천시 중랑구'}]);

  const setChangeData = () =>{
    const tempData = [... data, {key:'7', name:'김유신'}]
    setData(tempData);
  }
  return (
    <div >
      <Table 
        label = '제목' 
        header = {header}
        value = {value} 
        setValue={setValue}
        data = {data}
        keyField = "key"
        displayField = "name"
        opt={{flex:1}}
      />
      <br/>
      <button type="button" onClick={setChangeData}>데이터추가</button>
      <button type="button" onClick={()=>{setValue(['1','3'])}}>값설정</button>
      <button type="button" onClick={()=>{console.log('값읽기' + value)}}>값읽기</button>
    </div>
  );
}

export default TableTest;