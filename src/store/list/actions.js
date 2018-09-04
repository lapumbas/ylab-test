export const types = {
  FILL: Symbol('FILL'),
  CHANGE: Symbol('CHANGE'),
  SUBMIT: Symbol('SUBMIT')
};

export default {

  fill: (title, id) => {
    return dispatch => {
      return new Promise(resolve => {
        dispatch({
          type: types.FILL,
          payload: {title, id, resolve}
        });
      });
    };
  },

  change: (title, id) => {
    return dispatch => {
      return new Promise(resolve => {
        dispatch({
          type: types.CHANGE,
          payload: {title, id, resolve}
        });
      });
    };
  },

  // close: (result) => {
  //   return async (dispatch, getState) => {
  //     const {modal} = getState();
  //     modal.resolve(result);
  //     dispatch({
  //       type: types.CLOSE,
  //       payload: {result}
  //     });
  //   };
  // }
};
