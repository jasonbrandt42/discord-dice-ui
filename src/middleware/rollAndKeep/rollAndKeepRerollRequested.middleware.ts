import { ROLL_AND_KEEP_REROLL_REQUESTED, requestRollAndKeepRoll } from '../../actions/rollAndKeep.actions';

export default (store: any) => (next: any) => (action: any) => {
	if (action.type === ROLL_AND_KEEP_REROLL_REQUESTED) {
		console.log('store', store.getState());
		const state = store.getState();
		const { lastRollOptions } = state;

		store.dispatch(requestRollAndKeepRoll({
			...lastRollOptions
		}));
	}
	next(action);
};
