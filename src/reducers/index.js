import { combineReducers} from 'redux';
import { ciudades } from './ciudades';
import { ciudad } from './ciudad';

export default combineReducers({
    ciudades,
    ciudad
})