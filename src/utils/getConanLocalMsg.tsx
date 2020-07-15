import React from 'react';
import classNames from 'classnames/bind';
import CodeSpan from '../components/CodeSpan/CodeSpan';
import getConanSuccessLevel, { conanSuccessLevelType } from './getConanSuccessLevel';
import ResultVsSkillRow, { labelsType } from '../components/ResultVsSkillRow/ResultVsSkillRow';
import joinAsBlocks from './joinAsBlocks';
import styles from '../components/ResultsModal/ResultsModal.module.css';

export type LocalMsgParamsType = {
	title: any,
	fields: Array<any>
	isSuccess: boolean
	isFailure: boolean
	rollOptions?: any
	userSettings?: any
	results?: any
}

const getConanLocalMsg = (result:any, rollOptions:any, userSettings?:any):LocalMsgParamsType => {
	const { results, assistanceDiceResults } = result;
	const cx = classNames.bind(styles);
	const {
		dice,
		difficulty,
		focus,
		fortune,
		tn,
		untrainedTest
	} = rollOptions;

	const fields = [];
	let assistanceSuccessLevel:any = {};

	if (rollOptions.assistanceDice && assistanceDiceResults) {
		assistanceSuccessLevel = getConanSuccessLevel(
			assistanceDiceResults,
			Number(tn),
			Number(focus),
			Number(difficulty),
			untrainedTest
		);
	}

	const successLevel:conanSuccessLevelType = getConanSuccessLevel(
		results,
		Number(tn),
		Number(focus),
		Number(difficulty),
		untrainedTest,
		assistanceSuccessLevel.successLevel
	);
	const yourFocus = <p className={styles.resultDetailsRow}>Focus: <CodeSpan>{focus || 0}</CodeSpan></p>;
	const yourTn = <p className={styles.resultDetailsRow}>TN: <CodeSpan>{tn}</CodeSpan></p>;
	const wasUntrainedTest = untrainedTest ? <p className={styles.resultDetailsRow}>Untrained Test</p> : null;

	const fortuneUsed = (fortune && Number(fortune) > 0)
		? <p className={styles.resultDetailsRow}>Fortune points used: <CodeSpan>{fortune}</CodeSpan></p>
		: null;

	const title = (
		<div className={styles.conanResultDetails}>
			<p className={styles.resultDetailsRow}>You rolled <CodeSpan>{dice}d20</CodeSpan></p>
			{ yourFocus }
			{ yourTn }
			{ wasUntrainedTest }
			{ fortuneUsed }
		</div>
	);

	if (rollOptions.rerolledTimes) {
		const timesWord = rollOptions.rerolledTimes === 1 ? 'time' : 'times';
		fields.push(
			<div className={`${styles.generalResult}`}>Rerolled <CodeSpan>{rollOptions.rerolledTimes}</CodeSpan> {timesWord}</div>
		);
	}

	if (rollOptions.assistanceDice && assistanceDiceResults && assistanceDiceResults.length) {
		const assistanceDiceResultsJoined = joinAsBlocks(assistanceDiceResults);
		const assistanceComplications = assistanceSuccessLevel.complications
			? <p className={styles.assistanceResultRow}>Complications: <CodeSpan>{assistanceSuccessLevel.complications}</CodeSpan></p>
			: null;

		fields.push(
			<div className={styles.assistanceResult}>
				<p className={styles.assistanceResultRow}><strong>Assistance Roll:</strong></p>
				<p className={styles.assistanceResultRow}>Rolled: {assistanceDiceResultsJoined}</p>
				<p className={styles.assistanceResultRow}>Successes: <CodeSpan>{assistanceSuccessLevel.successLevel}</CodeSpan></p>
				{ assistanceComplications }
			</div>
		);
	}

	const labels:labelsType = {
		result: 'Successes',
		vs: 'Difficulty'
	};

	fields.push(
		<ResultVsSkillRow
			skillLevel={difficulty}
			finalDieResult={successLevel.successLevel}
			isSuccess={successLevel.isSuccess}
			labels={labels}
		/>
	);

	if (successLevel.isSuccess) {
		fields.push(
			<div className={cx({generalResult: true, generalResultSuccess: true})}>Success</div>
		);
	} else {
		fields.push(
			<div className={cx({generalResult: true, generalResultFailure : true})}>Failure</div>
		);
	}

	fields.push(
		<div className={cx({ slResult: true, momentumResults: true })}>
			<div>
				{/* COMPLICATIONS */}
				<div>
					<span className={styles.slResultLabel}>Complications:</span>
					</div>
				<div>
					<CodeSpan
						className={styles.slResultSpan}
						type ={successLevel.complications > 0 ? 'failure' : 'inactive'}
				>{successLevel.complications}</CodeSpan>
					</div>
			</div>
			<div>
				{/* MOMENTUM */}
				<div>
					<span className={styles.slResultLabel}>Momentum:</span>
					</div>
				<div>
					<CodeSpan
						className={styles.slResultSpan}
						type={successLevel.momentum > 0 ? 'success' : 'inactive'}
					>{successLevel.momentum}</CodeSpan>
				</div>
			</div>

		</div>
	);

	rollOptions.conanMode = true;

	return {
		title,
		fields,
		isSuccess: successLevel.isSuccess,
		isFailure: successLevel.isFailure,
		rollOptions,
		userSettings,
		results
	};
};

export default getConanLocalMsg;
