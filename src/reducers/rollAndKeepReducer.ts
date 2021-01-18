import { CLOSE_MSG_MODAL } from '../actions/modals';
import {
	ROLL_AND_KEEP_DICE_ROLLED,
	ROLL_AND_KEEP_DICE_REROLLED,
	ROLL_AND_KEEP_CLEAR_DATA
} from '../actions/rollAndKeep.actions';

const initialState: any = {
	showModal: false,
	results: [],
	modifier: 0
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ROLL_AND_KEEP_DICE_ROLLED:
		case ROLL_AND_KEEP_DICE_REROLLED: {
			const { results, modifier } = action.payload;
			return {
				...state,
				results,
				modifier,
				showModal: true
			};
		}
		case CLOSE_MSG_MODAL: {
			return {
				...state,
				showModal: false
			};
		}
		case ROLL_AND_KEEP_CLEAR_DATA: {
			return {
				...state,
				results: [],
				modifier: 0
			};
		}
	}
	return state;
};
