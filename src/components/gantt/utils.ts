import { RoadmapMvp } from './types';

export const getMonthDiff = (start: Date, last: Date) => {
  let months = (last.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += last.getMonth();
  return months <= 0 ? 0 : months;
};

export const getDayDiff = (startStr: string, endStr: string) => {
  const diff = new Date(endStr).getTime() - new Date(startStr).getTime();
  return Math.ceil(diff / (1000 * 3600 * 24)) + 1;
};

export const getEndDate = (mvps: RoadmapMvp[]) =>
  mvps.reduce((curr, val) => {
    const d1 = new Date(val.to);
    return d1 > curr ? d1 : curr;
  }, new Date());

export const getStartDate = (mvps: RoadmapMvp[]) =>
  mvps.reduce((curr, val) => {
    const d1 = new Date(val.to);
    return d1 < curr ? d1 : curr;
  }, new Date());
