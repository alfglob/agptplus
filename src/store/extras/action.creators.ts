import { ExtrasActionType } from './action.types';

export const init = () => ({
  kpi: [],
  roadmap: [],
});

export const updateKpi = (payload: any) => ({
  type: ExtrasActionType.UPDATE_KPI,
  payload,
});

export const updateRoadmap = (payload: any) => ({
  type: ExtrasActionType.UPDATE_ROADMAP,
  payload,
});

export const updateKpiAsignee = (payload: any) => ({
  type: ExtrasActionType.UPDATE_KPI_ASIGNEE,
  payload,
});

export const extrasActions = (dispatch: any) => ({
  updateKpi: (payload: any) => dispatch(updateKpi(payload)),
  updateRoadmap: (payload: any) => dispatch(updateRoadmap(payload)),
  updateKpiAsignee: (payload: any) => dispatch(updateKpiAsignee(payload)),
});
