import Modal from "react-modal";
import css from './ImageModal.module.css';
import { FC } from 'react'

Modal.setAppElement('#root');

interface ImageModalProps {
    isOpen: boolean
    closeModal: () => void
    imageUrl: string
}
const ImageModal: FC<ImageModalProps> = ({ isOpen, closeModal, imageUrl }) => {
    return (
        <Modal            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className={`${css.modal} ${css.image}`}
            overlayClassName={css.overlay}>
            
            <div>
                <img src={imageUrl} alt="image"/>
            </div>
        </Modal>
    )
};

export default ImageModal



