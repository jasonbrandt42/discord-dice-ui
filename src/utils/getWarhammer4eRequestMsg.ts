import { requestParams } from './request';
import getSuccessLevels from './getSuccessLevels';
import getSuccessLevelString from './getSuccessLevelString';

const getRequestMsg = (result:any, rollOptions:any, userSettings:any) => {
	const {
		results,
		cocBonusResult,
		cocPenaltyResult,
		skillLevel
	} = result;
	const username = userSettings.username || 'USERNAME_MISSING'
	const fields = [];
	const skillLevelString = skillLevel <= 9 ? `0${skillLevel}` : `${skillLevel}`;
	let finalDieResultString;
	let finalDieResult;
	let description;
	let msgTitle;

	if (rollOptions.cocBonus || rollOptions.cocTwoBonus) {
		const dieWord = rollOptions.cocBonus ? 'one Bonus Die' : 'two Bonus Dice'
		msgTitle = `${username} rolled **${dieWord}**. Results: \`${results.join(', ')}\`.`;
		finalDieResult = cocBonusResult;
	} else if (rollOptions.cocPenalty || rollOptions.cocTwoPenalty) {
		const dieWord = rollOptions.cocPenalty ? 'one Penalty Die' : 'two Penalty Dice'
		msgTitle = `${username} rolled **${dieWord}**. Results: \`${results.join(', ')}\`.`;
		finalDieResult = cocPenaltyResult;
	} else {
		msgTitle = `${username} rolled **\`1d100\`**. Result: \`${results[0]}\`.`;
		finalDieResult = results[0];
	}
	finalDieResultString = finalDieResult <= 9 ? `0${finalDieResult}` : `${finalDieResult}`;
	
	const successLevels = getSuccessLevels(skillLevel, finalDieResult);
	const successLevelIcon = successLevels.isSuccess ? ':green_circle:' : ':red_circle:';

	fields.push({
		name: 'Success level:',
		value: successLevelIcon + ' ' + getSuccessLevelString(successLevels)
	});

	description = `Roll: \`${finalDieResultString}\` vs. Skill level: \`${skillLevelString}\`.`;

	const msgParams:requestParams = {
		hookUrl: userSettings.hookUrl,
		msgTitle,
		color: userSettings.userColor,
		fields,
		description
	};
	return msgParams;
};

export default getRequestMsg;