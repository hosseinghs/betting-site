import dayjs from './dayjs';

export const formatDate = (date: string | Date) => {
  return dayjs(date).format('D MMMM YYYY');
};

export const formatDateTime = (date: string | Date) => {
  return dayjs(date).format('D MMMM YYYY HH:mm');
};

export const formatTime = (date: string | Date) => {
  return dayjs(date).format('HH:mm');
};

export const formatRelativeTime = (date: string | Date) => {
  return dayjs(date).fromNow();
}; 