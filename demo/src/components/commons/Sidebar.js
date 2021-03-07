import React, { useEffect, useState, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ visible, onHide, disabled = false, width = 500, children }) => {
    const wrapperRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (visible) {
            open();
        } else {
            close();
        }
    }, [visible]);

    const open = () => {
        if (!wrapperRef.current.classList.contains('sidebar-opened')) {
            setIsOpen(true);
            wrapperRef.current.classList.add('sidebar-opened');
        }
    };

    const close = () => {
        wrapperRef.current.classList.remove('sidebar-opened');
        setIsOpen(false);
    };

    const onCloseClick = () => {
        if (!disabled) {
            onHide();
        }
    }

    return (
        <div className={`sidebar-wrapper`} ref={wrapperRef} >
            <div className="sidebar-dimmer" onClick={onCloseClick} style={isOpen ? { zIndex: 900 } : null}></div>
            <div className="sidebar-close" onClick={onCloseClick} style={{ transition: 0.5, right: isOpen ? width : -width }}><i className="circular grey close icon"></i></div>
            <div className="sidebar-body" style={{ transition: 0.5, width: width, right: isOpen ? 0 : -width }}>
                <div className="sidebar-real-body">
                    {children}
                </div>
            </div>
        </div >
    );
};

export default Sidebar;