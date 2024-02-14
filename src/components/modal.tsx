import React, { MouseEventHandler } from 'react'


export interface ModalProps {
    children?: React.ReactNode;
    closeModal?: MouseEventHandler<HTMLButtonElement>;
    visible?: boolean;
}

export default function Modal ({children, closeModal, visible}: ModalProps) {

  

  return (
    <>
      {
      visible &&
        <section className='flex flex-col justify-center items-center absolute w-120 h-96 bg-slate-50'>
          <div>
            <div>
              {children}
              <button onClick={closeModal}>Fechar</button>
            </div>
          </div>
        </section>      
      }    
    </>


  )
}