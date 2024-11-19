import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import S from './style';
import useInput from '../../hooks/useInput';

const Todo = ({todo}) => {

  const { id, title, content, userId, isChecked } = todo;
  const [value, onChange, setValue] = useInput(title);
  const [ isEdit, setIsEdit ] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit)
  }



  //
  const onClickTrash = async() =>{
    const response = await fetch(`http://localhost:4000/todo${id}`,{})
    console.log(datas)
  }


  return (
    <S.Li>
      <S.Wrapper>
        <input type="checkbox" />
          { isEdit ? (
            <input className='update-input' value={value} onChange={onChange} />
          ) : (
            <S.Title>
              {title}
            </S.Title>
          )}
      </S.Wrapper>
      <S.Wrapper>
        { isEdit ? (
          <>
            <S.Button><FontAwesomeIcon icon={faCheck} className='check' /></S.Button>
            <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faX} className='exit' /></S.Button>
          </>
        ) : (
          <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faPen} className='pen' /></S.Button>
        )}
        <S.Button><FontAwesomeIcon icon={faTrash} className='trash' onClick={onClickTrash} /></S.Button>
      </S.Wrapper>
    </S.Li>
  );
};

export default Todo;