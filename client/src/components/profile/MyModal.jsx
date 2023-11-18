//TODO make a modal for tailwind css that pops up a box centered on the screen with a max width of 80% and a max height of 80% with a close button in the top right corner to toggle it or a tap outside, this will be dependent on a variable passed in as a prop

import React, { useState } from "react";

const MyModal = ({modalOpener, modalContent, closeModalButton}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>{modalOpener}</div>

      {isOpen && (
        <div className="fixed inset-0 pl-3 pr-3 flex items-center justify-center bg-gray-600 bg-opacity-50" onClick={closeModal} >
          <div className="bg-bkg-1  ml-4 mr-4 p-8 rounded-md text-content  shadow-lg">
         {modalContent}
         {closeModalButton ? <button onClick={closeModal}>Close</button> : null}
          </div>
        </div>
      )}
    </>
  );
};

export default MyModal;