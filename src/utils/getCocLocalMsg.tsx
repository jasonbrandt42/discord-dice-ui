import React from 'react';
import joinAsBlocks from './joinAsBlocks';
import getSuccessLevels from './getSuccessLevels';
import SuccessLevelLadder from '../components/SuccessLevelLadder/SuccessLevelLadder';
import ResultVsSkillRow from '../components/ResultVsSkillRow/ResultVsSkillRow';

export type LocalMsgParamsType = {
	title: any,
	fields: Array<any>
	isSuccess?: boolean
	rollOptions?: any
	finalDieResult?: number,
	userSettings?: any
	results?: any
}

const getCocLocalMsg = (result:any, rollOptions:any, userSettings?:any):LocalMsgParamsType => {
	const {
		results,
		cocBonusResult,
		cocPenaltyResult,
		skillLevel
	} = result;
	const skillLevelString = skillLevel <= 9 ? `0${skillLevel}` : `${skillLevel}`;
	const fields = [];
	const resultsJoined = joinAsBlocks(results);
	let finalDieResult;
	let finalDieResultString;
	let title;

	if (rollOptions.cocBonus || rollOptions.cocTwoBonus) {
		const dieWord = rollOptions.cocBonus ? 'one Bonus Die' : 'two Bonus Dice'
		title = <>You rolled <strong>{dieWord}</strong>. Results: {resultsJoined}.</>;
		finalDieResult = cocBonusResult;
	} else if (rollOptions.cocPenalty || rollOptions.cocTwoPenalty) {
		const dieWord = rollOptions.cocPenalty ? 'one Penalty Die' : 'two Penalty Dice'
		title = <>You rolled <strong>{dieWord}</strong>. Results: {resultsJoined}.</>;
		finalDieResult = cocPenaltyResult;
	} else {
		title = null;
		finalDieResult = results[0];
	}
	finalDieResultString = finalDieResult <= 9 ? `0${finalDieResult}` : `${finalDieResult}`;

	const successLevels = getSuccessLevels(skillLevel, finalDieResult);

	fields.push(
		<ResultVsSkillRow
			skillLevel={skillLevelString}
			finalDieResult={finalDieResultString}
			isSuccess={successLevels.isSuccess}
		/>
	);


	fields.push(
		<SuccessLevelLadder successLevels={successLevels} />
	);

	rollOptions.cocMode = true;

	return {
		title,
		fields,
		isSuccess: successLevels.isSuccess,
		finalDieResult,
		rollOptions,
		userSettings
	};
};

export default getCocLocalMsg;