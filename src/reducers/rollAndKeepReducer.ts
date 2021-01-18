import { CLOSE_MSG_MODAL } from '../actions/modals';
import {
	ROLL_AND_KEEP_DICE_ROLLED,
	ROLL_AND_KEEP_DICE_REROLLED,
	ROLL_AND_KEEP_KEEP_DICE,
	ROLL_AND_KEEP_ALTER_DIE,
	ROLL_AND_KEEP_ADD_DIE,
	ROLL_AND_KEEP_ROLL_ADDITIONAL_DIE,
	ROLL_AND_KEEP_KEEP_ADDITIONAL_DIE,
	ROLL_AND_KEEP_CLEAR_DATA
} from '../actions/rollAndKeep.actions';


const initialState: any = {
	showModal: false,

	results: [],
	resultsKept: [],

	resultsKeptIndexesAltered: [],
	resultsKeptIndexesExploded: [],

	additionalDiceRolled: [],
	additionalDiceIndexesKept: [],
	additionalDiceIndexesDropped: [],
	additionalDiceIndexesExploded: []
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ROLL_AND_KEEP_DICE_ROLLED:
		case ROLL_AND_KEEP_DICE_REROLLED: {
			return {
				...state,
				results: action.payload,
				showModal: true
			};
		}
		case ROLL_AND_KEEP_KEEP_DICE: {
			return {
				...state,
				resultsKept: action.payload
			};
		}
		case ROLL_AND_KEEP_ALTER_DIE: {
			const { resultsKept, resultsKeptIndexesAltered } = action.payload;
			return {
				...state,
				resultsKept,
				resultsKeptIndexesAltered
			};
		}
		case ROLL_AND_KEEP_ADD_DIE: {
			const { results, resultsKept } = action.payload;
			return {
				...state,
				results,
				resultsKept
			};
		}	
		case ROLL_AND_KEEP_ROLL_ADDITIONAL_DIE: {
			const { 
				additionalDiceRolled,
				resultsKeptIndexesExploded,
				additionalDiceIndexesExploded
			} = action.payload;

			return {
				...state,
				additionalDiceRolled,
				resultsKeptIndexesExploded,
				additionalDiceIndexesExploded
			};
		}
		case ROLL_AND_KEEP_KEEP_ADDITIONAL_DIE: {
			const { additionalDiceIndexesKept, additionalDiceIndexesDropped } = action.payload;
			return {
				...state,
				additionalDiceIndexesDropped,
				additionalDiceIndexesKept
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
				resultsKept: [],
				resultsKeptIndexesAltered: [],
				resultsKeptIndexesExploded: [],
			
				additionalDiceRolled: [],
				additionalDiceIndexesKept: [],
				additionalDiceIndexesDropped: [],
				additionalDiceIndexesExploded: []
			};
		}
	}
	return state;
};
