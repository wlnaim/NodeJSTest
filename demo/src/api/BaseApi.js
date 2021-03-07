import axios from 'axios';

const url = 'http://localhost:3000/api';
const urlUser = url + '/user';
const urlGender = url + '/gender';

class BaseApi {
    constructor() {
        this.url = url;
        this.urlUser = url;
        this.urlGender = url;
        this.getGenders = this.getGenders.bind(this);
        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getGenders() {
        return axios.get(urlGender);
    }

    async getAll() {
        return axios.get(urlUser);
    }

    async get(id) {
        return axios.get(urlUser + id);
    }

    async save(entity) {
        if (!entity.id || entity.id <= 0) {
            let saveEntity = { ...entity };
            saveEntity.id = 0;
            return axios.post(urlUser, saveEntity);
        }
        else {
            return axios.put(urlUser, entity);
        }
    }

    async delete(id) {
        return axios.delete(urlUser + id);
    }
}

export default BaseApi;