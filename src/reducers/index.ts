import { combineReducers } from 'redux';
import userSettings from './userSettingsReducer';
import diceSelected from './diceSelectedReducer';
import warhammerSlMode from './warhammerSlModeReducer';
import modalsState from './modalsReducer';
import msg from './msgReducer';
import l5r1eData from './l5r1eReducer';
import l5rData from './l5rReducer';
import conanData from './conanReducer';
import narrativeDiceData from './narrativeDicereducer';
import { reducer as form } from 'redux-form'
import lastRollOptions from './lastRollOptionsReducer';
import rerollCount from './rerollCountReducer';

export default combineReducers({
	userSettings,
	diceSelected,
	warhammerSlMode,
	modalsState,
	form,
	msg,
	l5r1eData,
	l5rData,
	conanData,
	narrativeDiceData,
	lastRollOptions,
	rerollCount
});
