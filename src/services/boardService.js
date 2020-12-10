
import {API} from '../config/api.js'

export const BoardServices = {    
  
    getBoards() {
        return API.get('api/board/list');
    },

    addBoard(data) {
        return API.post('api/board/add', data);
    },

    addBoardItem(data, uuid) {
        return API.post(`api/board/add-item/${uuid}`, data);
    },

    updateBoards(data) {
        return API.put('api/board/update', data);
    },

    deleteBoardItem(uuid) {
        return API.delete(`api/board/delete-item/${uuid}`);
    },

    deleteBoard(uuid) {
        return API.delete(`api/board/delete/${uuid}`);
    },

    updateBoardItem(data, uuid) {
        return API.put(`api/board/update-item/${uuid}`, data);
    },

    downloadDbDump() {
        return API.get('api/board/dump');
    } 

}



