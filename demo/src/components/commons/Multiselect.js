/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (base) => ({
        ...base,
        '&:hover': { borderColor: 'lightgray' }, // border style on hover
        border: '1px solid lightgray', // default border color
        boxShadow: 'none', // no box-shadow
    }),
};

const MultiSelect = ({ values, options, onChange, optionLabel = 'name', optionValue = 'id', isClearable = false }) => {
    const handleChange = (selected) => {
        onChange(selected);
    };

    return (
        <Select className="react-select-container" classNamePrefix="react-select" value={values} options={options} onChange={handleChange}
            isMulti={false} getOptionLabel={option => option[optionLabel]} getOptionValue={option => option[optionValue]} styles={customStyles} isClearable={isClearable}
            closeMenuOnSelect={false} />
    );
};

export default MultiSelect;