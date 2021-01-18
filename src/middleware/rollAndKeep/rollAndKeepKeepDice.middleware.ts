import { ROLL_AND_KEEP_KEEP_DICE } from '../../actions/rollAndKeep.actions';

export default (store: any) => (next: any) => (action: any) => {
	if (action.type === ROLL_AND_KEEP_KEEP_DICE) {
		const state = store.getState();
		const keptIndexes = action.payload;
		const { rollAndKeepData } = state;
		const { results } = rollAndKeepData;

		const resultsKept = results
			.filter((_: string, i: number) => keptIndexes.includes(i));

		action.payload = resultsKept;
	}
	next(action);
};
