import React, { useState, useEffect } from 'react';
import { LoadingButton } from '../commons/Buttons';
import PageHeader from '../commons/PageHeader';
import Sidebar from '../commons/Sidebar';
import UserForm from './UserForm';
import UserRow from './UserRow';
import BaseApi from '../../api/BaseApi';
let loading = 0;
const UsersPage = () => {
    const [adding, setAdding] = useState(false);
    const [selected, setSelected] = useState(false);
    const [openModal, setOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userApi = new BaseApi();
        setUsers(userApi.getAll());
    }, []);


    const close = () => {
        setAdding(false);
        setSelected(null);
    };

    const open = () => {
        setAdding(true);
    };

    const onSave = (user) => {
        const userApi = new BaseApi();
        userApi.save(user).then(() => {
            close();
        });
    };

    const closeModal = () => {
        setOpen(null);
    };

    return (
        <div>
            <Sidebar visible={adding} onHide={close} disabled={loading > 0}>
                <div style={{ paddingTop: 10 }}>
                    <UserForm user={selected} save={onSave} cancel={close} setOpen={setOpen} />
                </div>
            </Sidebar>
            <PageHeader title="Users" topComponents={[<LoadingButton text="Add" onClick={open} loading={loading} title="Add User" key="AddUserButton" />]} />
            <table className="ui selectable very basic table">
                <tbody>
                    {users.length > 0 ? users.map(x =>
                        <UserRow key={`user${x.id}`} user={x} onClick={setSelected} />
                    ) : []}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;
//export default withRouter(UsersPage);