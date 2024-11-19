import React from 'react';
import useInput from '../../hooks/useInput';
import S from './style';

const TodoInsert = ({isTodoUpdate,handleIsTodoUpdate}) => {
    const [ value,onChange,setValue] = useInput("");
    
    const onKeyPressAddtodo = (e) => {
        if(e.key === 'Enter'){
            if(!window.confirm("이대로 추가 하시겠습니까?")) return;
            fetch("http://localhost:4000/todo", {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/jon'
                },
                body : JSON.stringify({
                    title : value,
                    isChecked :false
                })
            }).then((response)=>{
                console.log(response)
                handleIsTodoUpdate(!isTodoUpdate)
                setValue("")
            })
            .catch(console.error)
        }
    }

    return (
        <div>
            <S.Input value={value} onChange={onChange} placeholder='할 일을 추가해볼까요?' onKeyUp={onKeyPressAddtodo}/>
        </div>
    );
};

export default TodoInsert;