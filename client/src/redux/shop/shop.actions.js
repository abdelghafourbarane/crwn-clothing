import shopTypes from "./shop.types";

// import {
//   convertCollectionsSnapshotToMap,
//   firestore,
// } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: shopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {

//   };
// };
