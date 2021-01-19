import { CLOSE_MSG_MODAL } from '../actions/modals';
import {
	ROLL_AND_KEEP_DICE_ROLLED,
	ROLL_AND_KEEP_REROLL_REQUESTED,
	ROLL_AND_KEEP_CLEAR_DATA
} from '../actions/rollAndKeep.actions';

const initialState: any = {
	showModal: false,
	results: [],
	modifier: 0,
	rerollCount: 0
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ROLL_AND_KEEP_DICE_ROLLED: {
			const { results, modifier } = action.payload;
			return {
				...state,
				results,
				modifier,
				showModal: true
			};
		}
		case ROLL_AND_KEEP_REROLL_REQUESTED : {
			return {
				...state,
				rerollCount: state.rerollCount + 1
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
				modifier: 0,
				rerollCount: 0
			};
		}
	}
	return state;
};
