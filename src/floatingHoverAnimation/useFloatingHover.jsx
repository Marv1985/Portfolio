import { useRef } from 'react';

const useFloatingHover = () => {
    // Ref for the floating div on hover
    const hoverDiv = useRef(null);
    // Animation container
    const hoverDivContainer = useRef(null);

    const floatingSelectorShow = () => {
        if (hoverDiv.current) {
            hoverDiv.current.style.opacity = '1';
        }
    };

    const floatingSelectorHide = () => {
        if (hoverDiv.current) {
            hoverDiv.current.style.opacity = '0';
        }
    };

    const floatingSelectorMoveIn = (e) => {
        const targetRect = e.target.getBoundingClientRect();
        const containerRect = hoverDivContainer.current.getBoundingClientRect();
        hoverDiv.current.style.top = `${targetRect.top - containerRect.top}px`;
        hoverDiv.current.style.left = `${targetRect.left - containerRect.left}px`;
        hoverDiv.current.style.width = `${targetRect.width}px`;
        hoverDiv.current.style.height = `${targetRect.height}px`;
    };

    return {
        hoverDiv,
        hoverDivContainer,
        floatingSelectorShow,
        floatingSelectorHide,
        floatingSelectorMoveIn,
    };
};

export default useFloatingHover;
