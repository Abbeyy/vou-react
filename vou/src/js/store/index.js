import { createStore } from 'redux';
import vou from '../reducers/VouReducer';

const vouStore = createStore(vou);

export default vouStore;
