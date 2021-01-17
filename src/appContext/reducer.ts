export interface IinitialState {
  appVersion: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export const initialState = {
  appVersion: "",
};

export const actionTypes = {
  SET_APP_VerSion: "SET_APP_VerSion",
};

const reducer = (state: IinitialState, action: IAction) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_APP_VerSion:
      return {
        ...state,
        appVersion: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
