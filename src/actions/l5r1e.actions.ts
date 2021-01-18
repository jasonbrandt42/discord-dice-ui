export const L5R_1E_REROLL_REQUESTED = 'L5R_1E_REROLL_REQUESTED';
export const L5R_1E_DICE_REROLLED = 'L5R_1E_DICE_REROLLED';
export const L5R_1E_ROLL_REQUESTED = 'L5R_1E_ROLL_REQUESTED';
export const L5R_1E_DICE_ROLLED = 'L5R_1E_DICE_ROLLED';
export const L5R_1E_KEEP_DICE = 'L5R_1E_KEEP_DICE';
export const L5R_1E_ALTER_DIE = 'L5R_1E_ALTER_DIE';
export const L5R_1E_ROLL_ADDITIONAL_DIE = 'L5R_1E_ROLL_ADDITIONAL_DIE';
export const L5R_1E_KEEP_ADDITIONAL_DIE = 'L5R_1E_KEEP_ADDITIONAL_DIE';
export const L5R_1E_CLEAR_DATA = 'L5R_1E_CLEAR_DATA';
export const L5R_1E_ADD_DIE = 'L5R_1E_ADD_DIE';
export const L5R_1E_SEND_STATE = 'L5R_1E_SEND_STATE';

export function requestL5r1eRoll(payload: any) {
	return {
		type: L5R_1E_ROLL_REQUESTED,
		payload
	}
}

export function requestL5r1eReroll(payload: any ) {
	return {
		type: L5R_1E_REROLL_REQUESTED,
		payload
	};
}

export function l5r1eDiceRerolled(payload: any ) {
	return {
		type: L5R_1E_DICE_REROLLED,
		payload
	};
}

export function l5r1eDiceRolled(payload: any) {
	return {
		type: L5R_1E_DICE_ROLLED, 
		payload
	};
}

export function l5r1eKeepDice(payload: any) {
	return {
		type: L5R_1E_KEEP_DICE, 
		payload
	};
}

export function l5r1eAlterDie(payload: any) {
	return {
		type: L5R_1E_ALTER_DIE, 
		payload
	};
}

export function l5rA1eddDie(payload: any) {
	return {
		type: L5R_1E_ADD_DIE,
		payload
	}
}

export function l5r1eRollAdditionalDie(payload: any) {
	return {
		type: L5R_1E_ROLL_ADDITIONAL_DIE, 
		payload
	};
}

export function l5r1eKeepAdditionalDie(payload: any) {
	return {
		type: L5R_1E_KEEP_ADDITIONAL_DIE, 
		payload
	};
}

export function l5r1eClearData() {
	return {
		type: L5R_1E_CLEAR_DATA
	};
}

export function l5r1eSendState() {
	return {
		type: L5R_1E_SEND_STATE
	};
}
