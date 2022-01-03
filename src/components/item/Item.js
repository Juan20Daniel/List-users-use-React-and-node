import React, { useState } from 'react';
import IconNotImg from '../iconNotImg/IconNotImg';
import ImgUser from '../imgUser/ImgUser';
import './item.css';
import ButtonOptionsMovil from '../buttonOptionsMovil/ButtonOptionsMovil';
const Item = ({ imgUserPerfil, firstname, lastname, buttonActive, modalActive, setModalActive, user }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const modal = () => {
        if(setModalActive) {
            setModalActive({
                state:true,
                user:user
            });
        }
    }
    return (
        <div className='user'>
            <div className='user__info'>
                <div className='img-user'>
                    {imgUserPerfil !== "false" ? <ImgUser img={imgUserPerfil} /> : <IconNotImg />}
                </div>
                <p>{firstname} {lastname}</p>
            </div>
            <div className='user_options'>
                <button onClick={modal} type="button">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaxJREFUSEu9VUtSwkAQfQ3eQz1BJqRc49oyVXgCuYHhJIYTKCeQYizXuNYx4QbhHpK2ZkhCEvIhCs5yetKvX/frF8KJD504P1oB3GAwBtGQAMGA0AUREDIQEmO5sNWsqchaADdwRiA8ArhoYRmBMZG2mle9qwS4DRyfCA/JB2sw+xv0l2/2R6jvboIr0cfmGkQegHPzjsiX1uekDLIHUEjOPJH2l9/EwA0GHog0UzBj+morDZqdAkDSlhcd3XDPTituE4JhRHFg3jHu8u0qAoROZCgfUHkZNMckkkJdpvEMIFHLE4C1FKptsJWk3KzAHYsdwMp5BuP+N9WnaBkLwkxaapxIeht2Q0crxOrS+zKNdBZ6TxZC2WUA1hdSqNbla1RV6BTy7FpUCrQppy7uNgAcrUUAVlKo1FaSGZx8yFvv0UtW0HGXVjXKNFHSMRatsEf/axWaRd7siOAtLDU9mtmliUp2HRHB/45773m7PuvFQ2Zo5zS2UuWkhUXbNy8zdG3VW7+vP2swvE4/nHwuY+E9jMDmd2klsRUIIWLM6xLvuWkXOXZ5+yffOQToB7z17BlHfTDMAAAAAElFTkSuQmCC" alt="icon circle"/>
                    <span>Active</span>
                </button>
                <button>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALNJREFUSEtjZKAxYKSx+QwELVi1SjiBgYFhPg6HJIaFvV2Az5F4LVi1StSAgeHfefy+ZDIMC3t9AZcaFAtWrRL+T40gCwt7CzeXvhZQw/XoZmCNA3KDCjloYBaNAAtg3kYPNmziZAXRqAUEU9FoEI2AICKlACQloz1gYGCQJ8VwBob/F8PC3hkQVZquXCkcwMj4v4GBgVGfSEse/v/PUBAe/nYDURYQaShRyghW+kSZgkcRAKyBnhnWN9uRAAAAAElFTkSuQmCC" alt="icon edit"/>
                    <span>Edit</span>
                </button>
                {buttonActive && 
                    <button>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMJJREFUSEtjZKAxYKSx+Qx4LThvaxzA+I+hnoGBwQCHQx78Z2IoNDx8dgMuh+K14IK18QMGBgZ5Ar68YHD0rCG5FvwHaTQ4eharQy5YG+OVB+kl5APqWgBzEaURj+xjFB/Q3AKYy4kJW2Rf4lNPduRR1QJ0FxLiI1tOlA8IGUhxEI1agJGvSA2S0TggWDRRHESEbCDHAmIqGnR7LxocPYtR82HNydCqsoGBgUGfkOuh8g//MzEUYKs6B7bSJ9L1eJUBAFoO0hnet+5kAAAAAElFTkSuQmCC" alt="icon delete" />
                        <span>Delete</span>
                    </button>
                }
            </div>
            <ButtonOptionsMovil 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                buttonActive={buttonActive}
                modal={modal}
            />
        </div>
    );
}

export default Item;