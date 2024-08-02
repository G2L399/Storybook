import React, { useState } from 'react';
import { FaExclamationCircle, FaCheckCircle, FaBarcode, FaDoorOpen } from 'react-icons/fa';

interface ModalProps {
    title: string;
    description: string;
    position?: 'left' | 'center';
    icon?: 'warning' | 'confirm' | 'scan' | 'leave';
    closeable?: boolean;
    positiveLabel?: string;
    negativeLabel?: string;
    onClose?: () => void;
    onSubmit?: () => void;
    onCancel?: () => void;
    inputType?: 'text' | 'import';
}

const Modal: React.FC<ModalProps> = ({
    title,
    description,
    position = 'center',
    icon,
    closeable = true,
    positiveLabel = 'Submit',
    negativeLabel = 'Cancel',
    onClose,
    onSubmit,
    onCancel,
    inputType = 'text'
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        if (onClose) onClose();
    };

    const iconComponents = {
        warning: <FaExclamationCircle className="text-yellow-500 text-4xl" />,
        confirm: <FaCheckCircle className="text-green-500 text-4xl" />,
        scan: <FaBarcode className="text-blue-500 text-4xl" />,
        leave: <FaDoorOpen className="text-red-500 text-4xl" />,
    };

    return (
        <div>
            <button
                onClick={handleOpen}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Open Modal
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                        {closeable && (
                            <button
                                onClick={handleClose}
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                style={{ fontSize: '2rem' }}
                            >
                                &times;
                            </button>
                        )}
                        {icon && <div className="flex justify-center mb-4">{iconComponents[icon]}</div>}
                        <div className={` ${position === 'left' ? 'text-left' : 'text-center'}`}>
                            <h2 className="text-2xl font-bold mb-4">{title}</h2>
                            <p className="text-gray-700 mb-6">{description}</p>
                            {inputType === 'text' ? (
                                <input
                                    type="text"
                                    className="w-full mb-4 p-2 border rounded"
                                    placeholder="Enter text"
                                />
                            ) : (
                                <input
                                    type="file"
                                    className="w-full mb-4 p-2 border rounded"
                                    placeholder="Import file"
                                />
                            )}
                        </div>
                        <div className="flex justify-between space-x-4">
                            <button
                                onClick={handleClose}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            >
                                {negativeLabel}
                            </button>
                            <button
                                onClick={onSubmit}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                {positiveLabel}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
