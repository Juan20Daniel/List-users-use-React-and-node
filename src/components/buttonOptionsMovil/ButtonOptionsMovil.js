import React from 'react';
import './buttonOptionsMovil.css';

const ButtonOptionsMovil = ({ isOpen, setIsOpen, buttonActive, modal }) => {
    const menuOptions = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='optionsMovil'>
            <img onClick={menuOptions} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAHxJREFUSEtjZKAxYKSx+QwjyILm5mYHJiam+aAg/ffvX2Jtbe0BYoKX6CBqbW19wMDAIA819EF1dbUitS34wMDAwA819GF1dbUCVS2ABtECaBAlUD2IiHEtNjVExwHNLRhNRQSDeDQVERtEo2UR7pAaTUUEUxG5CmhemgIAVQ5OGQ+sJVYAAAAASUVORK5CYII=" alt="icono de menu"/>
            <div className={`options ${isOpen && "openMenu"}`}>
                {buttonActive && <button type='button' onClick={modal}>Active</button>}
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default  ButtonOptionsMovil;