const getCurrentDate = state => state.diary.date;
const getIsLoadung = state => state.diary.isLoading;
const getIsSuccess = state => state.diary.isSuccess;
const getIsError = state => state.diary.isError;
const getGiaryProducts = state => state.diary.products;

export const diarySelectors = {
  getCurrentDate,
  getIsLoadung,
  getIsSuccess,
  getIsError,
  getGiaryProducts,
};
