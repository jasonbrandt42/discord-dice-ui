import { NARRATIVE_DICE_POOL_ROLL_REQUESTED, narrativeDicePoolRolled } from '../actions/roll.actions';
import getDieNumberVal from '../utils/getDieNumberVal';
import getResultsArray from '../utils/getResultsArray';

export default (store: any) => (next: any) => (action: any) => {
	if (action.type === NARRATIVE_DICE_POOL_ROLL_REQUESTED) {
		const state = store.getState();
		const { form : { diceModuleForm } } = state;
		const formValues = diceModuleForm?.values || {};
		const { pool, modifier } = action.payload;	
		const results = {};

		console.log('pool', pool)

		Object.keys(pool).forEach((diceType: string) => {
			const diceTypeNum = getDieNumberVal(diceType);
			const diceAmount: number = pool[diceType];
			const resultsArray = getResultsArray(diceTypeNum, diceAmount);
			if (resultsArray.length) {
				// @ts-ignore
				results[diceType] = resultsArray;
			}
		});

		console.log('results', results);

		if (Object.keys(results).length) {
			store.dispatch(narrativeDicePoolRolled({ results, modifier }));
		}
	}
	next(action);
};