// export const loginUser = (email, password) => {
//     return (dispatch, getState) => {
//         axios.post(API_CONSTANTS.baseUrl + API_CONSTANTS.login, { email, password })
//             .then((response) => {
//                 dispatch({
//                     type: APP_SET_USER_DATA,
//                     payload: response.data,
//                 });
//                 debugger;
//                 if (response.data.user.project.length > 0){
//                     if (response.data.user.project.length == 1){
//                         dispatch(submitSelectedProject(true))
//                     }else{
//                         dispatch({
//                             type: SHOW_LOADER,
//                             payload: false
//                         });
//
//                         let navigatorUID = Store.getState().navigation.currentNavigatorUID;
//                         Store.dispatch(NavigationActions.push(“mainNav”, Router.getRoute(‘selectProject’)))
//                     }
//                 }else{
//                     dispatch({
//                         type: SHOW_LOADER,
//                         payload: false
//                     });
//
//                     showAlert(“No Projects available”)
//                 }
//             })
//             .catch((e) => {
//                 debugger;
//                 dispatch({
//                     type: SHOW_LOADER,
//                     payload: false
//                 });
//
//                 console.log(‘catch error loginAPI’, e);
//                 if (e.response.data.message){
//                     showAlert(e.response.data.message)
//                 }else {
//                     showAlert(Constant.ServerError)
//                 }
//                 throw new Error(e);
//             });
//     };
// };