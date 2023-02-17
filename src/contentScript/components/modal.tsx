import React, {useState} from 'react';
import styled from 'styled-components'

export const Modal = ({onClose, selectedText}) => {
    const [input1Value, setInput1Value] = useState("");
    const [input2Value, setInput2Value] = useState(selectedText);

    function handleInput1Change(event) {
        setInput1Value(event.target.value);
    }

    function handleInput2Change(event) {
        setInput2Value(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(input1Value && input2Value) {
            alert(input1Value + input2Value)
        }
        else {
            alert('enter the data')
        }
        // handle form submission here
    }

    return (
        <CustomModalContainer className="modal-background" onClick={onClose}>
            <CustomModal className="modal-content" onClick={(event) => event.stopPropagation()}>
                <h2>Modal Window</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Input 1:
                        <input type="text" value={input1Value} onChange={handleInput1Change}/>
                    </label>
                    <br/>
                    <label>
                        Input 2:
                        <input type="text" value={input2Value} onChange={handleInput2Change}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </CustomModal>
        </CustomModalContainer>
    );
}

export default Modal;

const CustomModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const CustomModal = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 480px;
  width: 100%;
  text-align: center;

  h2 {
    margin-top: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
      width: 100%;

      input {
        border: none;
        border-radius: 4px;
        padding: 8px 16px;
        width: 100%;
      }

      span {
        font-size: 12px;
        margin-top: 8px;
        color: #888;
      }
    }

    button {
      background-color: #0077cc;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      padding: 8px 16px;
      transition: all 0.2s ease;

      &:hover {
        background-color: #005499;
      }
    }

  }`