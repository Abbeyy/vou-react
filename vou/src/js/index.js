import vouStore from "./store/index";
import { logIn, logOut, setUsername } from "../js/actions/index";
window.vouStore = vouStore;
window.logIn = logIn;
window.logOut = logOut;
// window.getUsername = getUsername;
window.setUsername = setUsername;

export default vouStore;