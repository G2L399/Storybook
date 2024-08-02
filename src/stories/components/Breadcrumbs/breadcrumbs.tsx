import React from 'react';

interface BreadcrumbsProps {
    items: string[];
    separator: string;
    onClick?: () => void; // Optional onClick prop
    size?: 'small' | 'medium' | 'large';
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator, onClick, size }) => {
    const sizeClasses = {
        small: 'text-1xl',  // Small size
        medium: 'text-2xl', // Medium size
        large: 'text-3xl',  // Large size
    };

    // Get the appropriate class for the selected size, or fallback to a default size
    const textSizeClass = size ? sizeClasses[size] : 'text-2xl'; // Default to medium if no size is provided
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex items-center">
                {items.map((item, index) => {
                    const isLastItem = index === items.length - 1; return (
                        <li key={index} className={` ${textSizeClass} flex items-center`}>
                            <a
                                onClick={onClick} // Attach the onClick handler
                                className={`cursor-pointer ${isLastItem ? 'text-gray-400' : 'text-blue-600 hover:underline'}`}
                            >
                                {item}
                            </a>
                            {index < items.length - 1 && (
                                <span className="mx-2">{separator === ' ' ? <>&nbsp;</> : separator}</span>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    );
};

Breadcrumbs.defaultProps = {
    items: ['Home', 'Category', 'Item'],
    separator: '/',
};

export default Breadcrumbs;
