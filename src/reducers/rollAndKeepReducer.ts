import { CLOSE_MSG_MODAL } from '../actions/modals';
import { ROLL_AND_KEEP_DICE_ROLLED } from '../actions/rollAndKeep.actions';

const initialState: any = {
	showModal: false,
	results: [],
	modifier: 0
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
		case CLOSE_MSG_MODAL: {
			return {
				...state,
				showModal: false
			};
		}
	}
	return state;
};
