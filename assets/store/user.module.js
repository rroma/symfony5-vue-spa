import authentication from '../services/authentication'
import router from '../router'

const token = localStorage.getItem('token');
const initialState = user
    ? { status: { authenticated: true } }
    : { status: { authenticated: false } };

export const user = {
    state: initialState,
    actions: {
        login({ dispatch, commit }, { username, password }) {
            commit('loginStart', username);
            authentication.login(username, password).then(
                token => {
                    commit('loginSuccess', token);
                    router.push({ name: 'home' });
                },
                error => {
                    commit('loginFailure', error);
                }
            );
        }
    },
    mutations: {
        loginStart(state, username) {
            state.username = username;
        },
        loginSuccess(state, token) {
            state.authenticated = true;
            localStorage.setItem('user', JSON.stringify({ username: state.username, token }));
        },
        loginFailure(state, error) {
            state.authenticated = true;
            localStorage.removeItem('user');
        }
    }
}