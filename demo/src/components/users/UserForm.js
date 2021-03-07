/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { LoadingButton } from '../commons/Buttons';
import GendersSelect from './GendersSelect';
import BaseApi from '../../api/BaseApi'
const newUser = { firstname: '', lastname: '', gender_id: 0 };

const UserForm = ({ user, loading, save, cancel }) => {
    const [userData, setUserData] = useState({ ...newUser });
    const [submitted, setSubmitted] = useState(false);
    const [genders, setGender] = useState(["male", "female"]);

    useEffect(() => {
        const currentUser = user === null ? { ...newUser } : { ...user };
        const userApi = new BaseApi();
        setGender(userApi.getGenders());
        setUserData(currentUser);
        setSubmitted(false);
    }, [user]);

    const handleChange = (e) => {
        let data = { ...userData };
        data[e.target.name] = e.target.value;
        setUserData(data);
    };

    const handleChangeToggle = (e) => {
        let data = { ...userData };
        data.active = e.target.checked;

        setUserData(data);
    };

    const handleGendersChange = (selectedGenders) => {
        setUserData({ ...userData, genders: selectedGenders });
    };

    const handleSave = () => {
        setSubmitted(true);
        save(userData);
    };

    return (
        <div className="ui form">
            <h4 className="ui dividing header">User Information</h4>
            <div className={'field' + (submitted ? ' error' : '')}>
                <label>First Name</label>
                <input type="text" name="first_name " placeholder="First Name" value={userData.first_name} onChange={handleChange} />
            </div>
            <div className={'field' + (submitted ? ' error' : '')}>
                <label>Last Name</label>
                <input type="text" name="last_name" placeholder="Last Name" value={userData.last_name} onChange={handleChange} />
            </div>
            <div className={'field' + (submitted ? ' error' : '')}>
                <label>Birthday</label>
                <input type="date" name="birthday" placeholder="Birthday" value={userData.birthday} onChange={handleChange} />
            </div>
            <div className={'field' + (submitted ? ' error' : '')}>
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
            </div>
            <div className={'field'}>
                <label>Gender </label>
                <GendersSelect values={userData.gender_id} genders={genders} onChange={handleGendersChange} />
            </div>
            <LoadingButton onClick={handleSave} loading={loading} className="right floated" text="Save" />
            <LoadingButton onClick={cancel} loading={loading} className="right floated" text="Cancel" color=' ' />
        </div>
    );
};

export default UserForm;

