import { ExtrasActionType } from './action.types';

const initialState = {
  kpi: [],
  roadmap: [],
};

export const extrasState = (state: any) => ({
  kpi: state.extras.kpi,
  roadmap: state.extras.roadmap,
});

// eslint-disable-next-line @typescript-eslint/default-param-last
export const extrasReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ExtrasActionType.UPDATE_KPI:
      return {
        ...state,
        kpi: action.payload,
      };
    case ExtrasActionType.UPDATE_ROADMAP:
      return {
        ...state,
        roadmap: action.payload,
      };
    case ExtrasActionType.UPDATE_KPI_ASIGNEE: {
      const kpi = [...state.kpi] as any;
      kpi[action.payload.key].asignee = action.payload.value;
      return {
        ...state,
        kpi,
      };
    }
    default:
      return state;
  }
};
