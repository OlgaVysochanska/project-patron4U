export const getAllNotices = ({ notices }) => notices.items;

export const getLoadingNotices = ({ notices }) => notices.isLoading;

export const getNoticesError = state => state.notices.error;


