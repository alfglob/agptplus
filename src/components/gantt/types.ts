export interface RoadmapEpic {
  from: string;
  to: string;
  epicName: string;
}

export interface RoadmapMvp {
  mvp: string;
  from: string;
  to: string;
  epics: RoadmapEpic[];
}

export const CELL_HEIGHT = 40;

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'November',
  'December',
];
