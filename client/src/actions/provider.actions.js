import { providerConstants } from "../constants";
import { providerService } from "../services";
// import { alertActions } from ".";
import { history } from "../helpers";

export const providerActions = {
  getAll,
  delete: _delete,
};

// function login(providername, password) {
//   return (dispatch) => {
//     dispatch(request({ providername }));

//     providerService.login(providername, password).then(
//       (provider) => {
//         dispatch(success(provider));
//         history.push("/");
//       },
//       (error) => {
//         dispatch(failure(error.toString()));
//         dispatch(alertActions.error(error.toString()));
//       }
//     );
//   };

//   function request(provider) {
//     return { type: providerConstants.LOGIN_REQUEST, provider };
//   }
//   function success(provider) {
//     return { type: providerConstants.LOGIN_SUCCESS, provider };
//   }
//   function failure(error) {
//     return { type: providerConstants.LOGIN_FAILURE, error };
//   }
// }

// function logout() {
//   providerService.logout();
//   return { type: providerConstants.LOGOUT };
// }

// function register(email, password) {
//   console.log("provider action: register");
//   const provider = { email, password };
//   return (dispatch) => {
//     dispatch(request(provider));

//     providerService.register(provider).then(
//       (provider) => {
//         dispatch(success());
//         history.push("/login");
//         dispatch(alertActions.success("Registration successful"));
//       },
//       (error) => {
//         dispatch(failure(error.toString()));
//         dispatch(alertActions.error(error.toString()));
//       }
//     );
//   };

//   function request(provider) {
//     return { type: providerConstants.REGISTER_REQUEST, provider };
//   }
//   function success(provider) {
//     return { type: providerConstants.REGISTER_SUCCESS, provider };
//   }
//   function failure(error) {
//     return { type: providerConstants.REGISTER_FAILURE, error };
//   }
// }

function getAll() {
  return (dispatch) => {
    dispatch(request());

    providerService.getAll().then(
      (providers) => dispatch(success(providers)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: providerConstants.GETALL_REQUEST };
  }
  function success(providers) {
    return { type: providerConstants.GETALL_SUCCESS, providers };
  }
  function failure(error) {
    return { type: providerConstants.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    providerService.delete(id).then(
      (provider) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: providerConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: providerConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: providerConstants.DELETE_FAILURE, id, error };
  }
}
