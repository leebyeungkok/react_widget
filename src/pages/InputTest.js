import React, {useState} from 'react';
import Input from '../components/widgets/Input';
const InputTest = () => {
  const [value, setValue] = useState('');
  return (
    <div >
      <Input 
        label = '제목' 
        value={value} 
        setValue={setValue}
        opt={{labelWidth:100, flex:1, inputFlex:1}}
      />
      <Input 
        label = '제목' 
        value={value} 
        setValue={setValue}
        opt={{labelWidth:100, flex:1, inputFlex:1}}
      />
      <br/>
      <button type="button" onClick={()=>{setValue('aaa')}}>값설정</button>
      <button type="button" onClick={()=>{console.log('값읽기' + value)}}>값읽기</button>
    </div>
  );
}

export default InputTest;