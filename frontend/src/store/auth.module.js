// import AuthService from "../services/auth.service";

// export const auth = {
//   namespaced: true,
//   state: {
//     user: JSON.parse(localStorage.getItem("user")),
//     userId: null,
//     isAdmin: false,
//     isLogged: JSON.parse(localStorage.getItem("user")) ? true : false,
//     isLoggedOut: false,
//   },
//   actions: {
//     login({ commit }, user) {
//       return AuthService.login(user).then(
//         (user) => {
//           commit("loginSuccess", user);
//           return Promise.resolve(user);
//         },
//         (error) => {
//           commit("loginFailure");
//           return Promise.reject(error);
//         }
//       );
//     },
//     logout({ commit }) {
//       AuthService.logout();
//       commit("logout");
//     },
//     register({ commit }, user) {
//       return AuthService.signup(user).then(
//         (response) => {
//           commit("registerSuccess");
//           return Promise.resolve(response.data);
//         },
//         (error) => {
//           commit("registerFailure");
//           return Promise.reject(error);
//         }
//       );
//     },
//   },
//   mutations: {
//     loginSuccess(state, user) {
//       state.isLogged = true;
//       state.user = user;
//     },
//     loginFailure(state) {
//       state.isLogged = false;
//       state.user = null;
//     },
//     logout(state) {
//       state.isLogged = false;
//       state.user = null;
//     },
//     registerSuccess(state) {
//       state.isLogged = false;
//     },
//     registerFailure(state) {
//       state.isLogged = false;
//     },
//   },
// };
