import { userLogin } from '@/api/login'

export default {
    namespace: 'login',
    state: {
        token: ""
    },
    effects: {
        *login({ payload }, { call, put }) {
            const result = yield call(userLogin, payload);
            yield put({
                type: 'saveToken',
                payload: {
                    token: result.data.token
                }
            });
        },
    },
    reducers: {
        saveToken(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        },
    }
}