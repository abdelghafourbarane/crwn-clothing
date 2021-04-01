import userTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: userTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START,
});

export const signUpStart = (userParams) => ({
  type: userTypes.SIGN_UP_START,
  payload: userParams,
});

export const signUpFailure = (error) => ({
  type: userTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signUpSuccess = (user) => ({
  type: userTypes.SIGN_UP_SUCCESS,
  payload: user,
});
