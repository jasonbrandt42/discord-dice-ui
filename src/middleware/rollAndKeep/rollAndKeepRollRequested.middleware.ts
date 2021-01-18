import { ROLL_AND_KEEP_ROLL_REQUESTED, rollAndKeepDiceRolled } from '../../actions/rollAndKeep.actions';
import { D10 } from '../../consts/diceConstants';
import getResultsArray from '../../utils/getResultsArray';

export default (store: any) => (next: any) => (action: any) => {
	if (action.type === ROLL_AND_KEEP_ROLL_REQUESTED) {
		const { pool, modifier } = action.payload;
		const diceAmount = pool[D10];

		const getResults = (results: number[] = []) => {
			const result = getResultsArray(10)[0];
			results.push(result);
			if (result === 10) {
				getResults(results);
			}
			return results;
		};

		const results = new Array(diceAmount).fill('_').map(() => getResults());

		if (results.length) {
			store.dispatch(rollAndKeepDiceRolled({
				results,
				modifier: Number(modifier)
			}));
		}
	}
	next(action);
};
