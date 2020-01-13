import vouStore from "./store/index";
import { logIn, logOut } from "../js/actions/index";
window.vouStore = vouStore;
window.logIn = logIn;
window.logOut = logOut;
// window.getUsername = getUsername;

export default vouStore;