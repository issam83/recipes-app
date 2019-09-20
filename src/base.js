import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfuTEIHu-gvf0G_i1a3hc9-YonXhqO11U",
    authDomain: "my-recipes-app-e2efb.firebaseapp.com",
    databaseURL: "https://my-recipes-app-e2efb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
