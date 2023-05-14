import { useState } from 'react';

const useToggleModalWindow = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(isOpen => !isOpen);

  return { isModalOpen, openModal, closeModal, toggleModal };
};

export default useToggleModalWindow;
