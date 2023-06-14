import { FC, ReactNode, useState } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '20%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface Props {
  children: ReactNode;
  onClose(): void;
  setIsOpen: (open:boolean)=>void;
  modalIsOpen:boolean;
}

export const Modal: FC<Props> = (props: Props) => {
  const { children, onClose, modalIsOpen, setIsOpen } = props;

  function closeModal() {
    setIsOpen(false);
    onClose();
  }

  return (
    <div>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <div>{children}</div>
      </ReactModal>
    </div>
  );
};
