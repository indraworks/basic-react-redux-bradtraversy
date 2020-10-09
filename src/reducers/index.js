import { combineReducers } from 'redux'; //smua reducer digabung disini
import logReducers from './logReducers';

export default combineReducers({
  log: logReducers,
});
//nama log: logEducers ,yaitu sblha kiri tanda : ini yg akan jadi props
//dan mrupakan state yg direfeenesikan ke const MapStateToProps di component
//yaitu namanya state.log ,jadi namanya managacu pada nama ini ya yg ada di combine reducers
