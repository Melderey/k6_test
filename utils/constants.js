import { getFormatedDate, getRandomDate } from './utils';

export const HOST = 'localhost';
export const PORT = '1080';
export const LOGIN = 'jojo';
export const PASS = 'bean';
export const DEPART_DATE = getFormatedDate(new Date());
export const RETURN_DATE = getRandomDate(new Date(), new Date(2025, 0, 1));
