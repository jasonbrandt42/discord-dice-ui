import React from 'react';
import { connect } from 'react-redux';
import { hideMsg } from '../../../actions/modals';
import { rollAndKeepKeepDice, requestRollAndKeepReroll } from '../../../actions/rollAndKeep.actions';
import RollAndKeepResultsModal from './RollAndKeepResultsModal';

const mapStateToProps = (state: any) => {
	const { rollAndKeepData, rerollCount } = state;
	return {
		rollAndKeepData,
		rerollCount
	};
};

const mapDispatchToProps = {
	hideMsg,
	requestRollAndKeepReroll,
	rollAndKeepKeepDice
};

function RollAndKeepResultsModalContainer({
	hideMsg,
	rollAndKeepData: {
		showModal,
		results,
		modifier
	},
	rerollCount,
	requestRollAndKeepReroll,
	rollAndKeepKeepDice
}: any) {
	return (
		<RollAndKeepResultsModal
			showModal={showModal}
			hideMsg={hideMsg}
			rerollCount={rerollCount}
			keepDice={rollAndKeepKeepDice}
			requestRollAndKeepReroll={requestRollAndKeepReroll}
			results={results}
			modifier={modifier}
		/>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(RollAndKeepResultsModalContainer);
