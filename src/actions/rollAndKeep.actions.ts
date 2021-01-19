export const ROLL_AND_KEEP_REROLL_REQUESTED = 'ROLL_AND_KEEP_REROLL_REQUESTED';
export const ROLL_AND_KEEP_DICE_REROLLED = 'ROLL_AND_KEEP_DICE_REROLLED';
export const ROLL_AND_KEEP_ROLL_REQUESTED = 'ROLL_AND_KEEP_ROLL_REQUESTED';
export const ROLL_AND_KEEP_DICE_ROLLED = 'ROLL_AND_KEEP_DICE_ROLLED';
export const ROLL_AND_KEEP_KEEP_DICE = 'ROLL_AND_KEEP_KEEP_DICE';

export function requestRollAndKeepRoll(payload: any) {
	return {
		type: ROLL_AND_KEEP_ROLL_REQUESTED,
		payload
	}
}

export function requestRollAndKeepReroll(payload: any ) {
	return {
		type: ROLL_AND_KEEP_REROLL_REQUESTED,
		payload
	};
}

export function rollAndKeepDiceRerolled(payload: any ) {
	return {
		type: ROLL_AND_KEEP_DICE_REROLLED,
		payload
	};
}

export function rollAndKeepDiceRolled(payload: any) {
	return {
		type: ROLL_AND_KEEP_DICE_ROLLED, 
		payload
	};
}

export function rollAndKeepKeepDice(payload: any) {
	return {
		type: ROLL_AND_KEEP_KEEP_DICE, 
		payload
	};
}
