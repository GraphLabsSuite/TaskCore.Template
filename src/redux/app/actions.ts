export const SET_STATUS: string = 'APP_SET_STATUS';

export const appActionCreators = {
  setStatus(payload: boolean) {
    return {
      type: SET_STATUS,
      payload,
    };
  }
};
