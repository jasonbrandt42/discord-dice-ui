import {
	OPEN_COC_MODAL,
	CLOSE_COC_MODAL,
	OPEN_CONAN_MODAL,
	CLOSE_CONAN_MODAL,
	OPEN_INFINITY_MODAL,
	CLOSE_INFINITY_MODAL,
	OPEN_MODIFIER_MODAL,
	CLOSE_MODIFIER_MODAL,
	OPEN_WARHAMMER_MODAL,
	CLOSE_WARHAMMER_MODAL,
	OPEN_WARHAMMER_MONEY_MODAL,
	CLOSE_WARHAMMER_MONEY_MODAL,
	OPEN_SETTINGS_MODAL,
	CLOSE_SETTINGS_MODAL,
	OPEN_POOL_BUILDER_MODAL,
	CLOSE_POOL_BUILDER_MODAL,
	CLOSE_INFO_MODAL,
	OPEN_INFO_MODAL
} from '../actions/modals';

export interface ModalsStateTypes {
	isCoCModalOpen: boolean;
	isConanModalOpen: boolean;
	isInfinityModalOpen: boolean;
	isWarhammerModalOpen: boolean;
	isWarhammerMoneyModalOpen: boolean;
	isModifierModalOpen: boolean;
	isSettingsModalOpen: boolean;
	isPoolBuilderModalOpen: boolean;
	isCopyrightModalOpen: boolean;
}

const modalsState = {
	isCoCModalOpen: false,
	isConanModalOpen: false,
	isInfinityModalOpen: false,
	isWarhammerModalOpen: false,
	isWarhammerMoneyModalOpen: false,
	isModifierModalOpen: false,
	isSettingsModalOpen: false,
	isPoolBuilderModalOpen: false,
	isCopyrightModalOpen: false
};

// @TODO UNIFY REDUCER CASES
function modalsReducer(state: ModalsStateTypes = modalsState, action: any) {
	switch (action.type) {
		case CLOSE_COC_MODAL:
			return {
				...state,
				isCoCModalOpen: false
			};
		case OPEN_COC_MODAL:
			return {
				...state,
				isCoCModalOpen: true
			};
		case CLOSE_WARHAMMER_MODAL:
			return {
				...state,
				isWarhammerModalOpen: false
			};
		case OPEN_WARHAMMER_MODAL:
			return {
				...state,
				isWarhammerModalOpen: true
			};
		case CLOSE_SETTINGS_MODAL:
			return {
				...state,
				isSettingsModalOpen: false
			};
		case OPEN_SETTINGS_MODAL:
			return {
				...state,
				isSettingsModalOpen: true
			};
		case CLOSE_MODIFIER_MODAL:
			return {
				...state,
				isModifierModalOpen: false
			};
		case OPEN_MODIFIER_MODAL:
			return {
				...state,
				isModifierModalOpen: true
			};
		case CLOSE_CONAN_MODAL:
			return {
				...state,
				isConanModalOpen: false
			};
		case OPEN_CONAN_MODAL:
			return {
				...state,
				isConanModalOpen: true
			};
		case CLOSE_INFINITY_MODAL:
			return {
				...state,
				isInfinityModalOpen: false
			};
		case OPEN_INFINITY_MODAL:
			return {
				...state,
				isInfinityModalOpen: true
			};
		case OPEN_POOL_BUILDER_MODAL:
			return {
				...state,
				isPoolBuilderModalOpen: true
			};
		case CLOSE_POOL_BUILDER_MODAL:
			return {
				...state,
				isPoolBuilderModalOpen: false
			};
		case OPEN_INFO_MODAL:
			return {
				...state,
				isCopyrightModalOpen: true
			};
		case CLOSE_INFO_MODAL:
			return {
				...state,
				isCopyrightModalOpen: false
			};
		case OPEN_WARHAMMER_MONEY_MODAL:
			return {
				...state,
				isWarhammerMoneyModalOpen: true
			};
		case CLOSE_WARHAMMER_MONEY_MODAL:
			return {
				...state,
				isWarhammerMoneyModalOpen: false
			};
	}
	return state;
}

export default modalsReducer;
