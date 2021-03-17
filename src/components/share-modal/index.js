import Modal from '@material-ui/core/Modal';

const ShareModal = ({ open, toggleModal: handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        
      </Modal>
    );
}
 
export default ShareModal;