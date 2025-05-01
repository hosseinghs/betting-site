import dayjs from 'dayjs';
import 'dayjs/locale/fa';
import jalaliday from './jalali';

// Configure dayjs with Persian locale and Jalali calendar
dayjs.extend(jalaliday);
dayjs.locale('fa');

export default dayjs; 