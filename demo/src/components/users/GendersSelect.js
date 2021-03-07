import React from 'react';
import MultiSelect from '../commons/Multiselect';

const GendersSelect = ({ values, onChange }) => {
    return (
        <MultiSelect values={values} onChange={onChange} />
    );
};

export default GendersSelect;