/* eslint-disable react/prop-types */
import React from 'react';

export const SaveButton = ({ onSave }) => {
    return (
        <div className="ui positive right labeled icon button" onClick={onSave}>
            Save
            <i className="checkmark icon"></i>
        </div>);
};

export const DiscardButton = ({ onCancel }) => {
    return (<button className='ui button deny' onClick={onCancel}>Cancel</button>);
};

export const LoadingButton = ({ text = '', title = null, onClick, loading, disabled = false, color = null, size = null, icon = null, style = {}, className = '' }) => {
    return (<button onClick={onClick} className={className + ' ui button '
        + (!color ? 'meblue ' : color)
        + (loading ? ' loading ' : disabled ? ' disabled ' : '')
        + (size ? ' ' + size : '')
        + (icon ? ' icon ' + icon : '')
    } style={style} title={!title ? (!text ? icon : text) : title}>
        {icon && <i className={icon + ' icon'}></i>} {text}
    </button>);
};

export const PrintButton = (props) => (
    <LoadingButton title="Print" onClick={window.print} loading={props.loading} color="meblue" text="Print" />);
