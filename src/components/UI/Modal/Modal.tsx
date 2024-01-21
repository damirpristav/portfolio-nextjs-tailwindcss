"use client";
import { useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

const RootModal = ({ onClose, children }: Props) => {
  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-dark-400/50 flex items-center justify-center z-50 min-h-screen h-auto overflow-y-auto">
      <div className="max-h-[calc(100%-32px)] overflow-y-auto p-4 w-full">
        <div className="bg-primary-200 p-6 rounded-lg relative max-w-[800px] w-full mx-auto">
          <button
            className="absolute flex items-center justify-center w-8 h-8 -top-4 -right-4 bg-primary text-primary-300"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Modal = ({ children, ...props }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <RootModal {...props}>{children}</RootModal>,
        document.getElementById("modal-root")!
      )
    : null;
};

interface Props {
  onClose: () => void;
  children: ReactNode;
}
