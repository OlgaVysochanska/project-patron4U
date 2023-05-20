export const getAllNotices = ({ notices }) => notices.items;

export const getNoticesByCategory = ({notices}) => notices.category;

export const getLoadingNotices = ({ notices }) => notices.isLoading;

export const getNoticesError = state => state.notices.error;
