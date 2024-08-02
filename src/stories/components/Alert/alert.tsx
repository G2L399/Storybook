import React from 'react';
import { Alert as FlowbiteAlert, Toast as FlowbiteToast } from 'flowbite-react';
import "../../../styles/globals.css";

interface AlertProps {
    type: "information" | "notification";
    variant?: "default" | "success" | "warning" | "danger";
    size: 'small' | 'medium' | 'large';
    message: string;
    onClick?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, variant, message, size, onClick }) => {
    // Mapping for size classes
    const sizeClasses = {
        small: 'text-1xl',  // Small size
        medium: 'text-3xl', // Medium size
        large: 'text-5xl',  // Large size
    };

    // Mapping for variant classes
    const variantClasses = {
        default: 'bg-green-500 opacity-90	',
        success: 'bg-green-500 opacity-90	',
        warning: 'bg-yellow-500 opacity-90	',
        danger: 'bg-red-500 opacity-90',
    };

    // Get the appropriate class for the selected size and variant
    const textSizeClass = size ? sizeClasses[size] : 'text-1xl';
    const variantClass = variant ? variantClasses[variant] : 'bg-green-500';

    if (type === "notification") {
        return (
            <FlowbiteToast className='border-2 border-black'>
                <FlowbiteToast className={`inline-block px-4 py-2 ${textSizeClass} ${variantClass} text-white`}>
                    <div className='flex justify-between items-center'>
                        <div className="text-stroke-black mb-2 font-bold">Notification</div>
                        <div
                            className="text-black text-lg"
                            style={{
                                position: 'relative',
                                // top: '1rem',
                                // right: '1rem',
                                fontSize: '2rem', // Increase font size
                                cursor: 'pointer',
                            }}
                            onClick={onClick}
                        >
                            &times;
                        </div>
                    </div>
                    <hr className="custom-hr" />
                    <div className="text-stroke-black font-bold">{message}</div>
                </FlowbiteToast>
            </FlowbiteToast>
        );
    }

    // Default to Alert component for other types
    return (
        <FlowbiteAlert className={`inline-block px-4 border-4 border-black mb-3 ${textSizeClass} ${variantClass} text-white`}>
            <div className='flex justify-between items-center py-1'>
                <div className="text-stroke-black py-1 font-bold capitalize">{variant === 'default' ? 'success' : variant}</div>
                <div
                    className={`text-black text-lg`}
                    style={{
                        position: 'relative',
                        // top: '1rem',
                        // right: '1rem',
                        fontSize: '2rem', // Increase font size

                        cursor: 'pointer',
                    }}
                    onClick={onClick}
                >
                    &times;
                </div>
            </div>
            <div className="text-stroke-black font-bold" ><p style={{paddingBottom: '10px'}}>{message}</p></div>
        </FlowbiteAlert>
    );
};

Alert.defaultProps = {
    variant: "default",
    size: 'small'
};

export default Alert;
