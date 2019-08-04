import firebase from 'firebase';

const firebaseConfig = {
  /* firebase api key */
};

export const firebaseSet = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const getFireDB = () => {
  return firebase.database().ref('/').once('value')
}

export const getLicense = () => {
  return firebase.database().ref('/License').once('value')
}

export function writeUserData(id, pw) {
  firebase.database().ref('User/').set({
    id: id,
    pw: pw
  });
}