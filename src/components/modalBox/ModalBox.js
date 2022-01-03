import React from 'react';
import './modalBox.css';
import iconCloseModal from './assets/closeModal.svg';
import IconNotImg from '../iconNotImg/IconNotImg';
import ImgUser from '../imgUser/ImgUser';
const ModalBox = ({ modalState, modalButonClose, children }) => {
    const closeModal = () => {
        modalButonClose({
            ...modalState,
            state:false
        });
    }
    return (
        <div className={`modalBox ${modalState.state && "closeModal"}`}>
            <div className='modal__content'>
                <button onClick={closeModal} className='modal__buton-close'>
                    <img src={iconCloseModal} alt="icon close modal" />
                </button>
                <div className='modal__img-user'>
                    {modalState.user && 
                        <>
                            { modalState.user['img'] !== "false" ? <ImgUser img={modalState.user['img']} /> : <IconNotImg /> }
                        </>
                    }
                </div>
                { children }
            </div>
        </div>
    )
}

export default ModalBox;