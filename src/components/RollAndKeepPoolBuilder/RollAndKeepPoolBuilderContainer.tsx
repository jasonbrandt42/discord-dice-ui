import React from 'react';
import { connect } from 'react-redux';
import { submitRoll } from '../../actions/roll.actions';
import { rollAndKeepSendState } from '../../actions/rollAndKeep.actions';
import RollAndKeepPoolBuilder from './RollAndKeepPoolBuilder';

const mapDispatchToProps = { submitRoll, rollAndKeepSendState };

function RollAndKeepPoolBuilderContainer({
	diceModuleForm,
	submitRoll,
	rollAndKeepSendState
}: any ) {
	const rollOptions = diceModuleForm?.values || {};
	return (
		<RollAndKeepPoolBuilder
			rollOptions={rollOptions}
			submitRoll={submitRoll}
			rollAndKeepSendState={rollAndKeepSendState}
		/>
	);
}

export default connect(undefined, mapDispatchToProps)(RollAndKeepPoolBuilderContainer);
