const getCurrentDate = state => state.diary.date;
const getIsLoading = state => state.diary.isLoading;
const getIsSuccess = state => state.diary.isSuccess;
const getIsError = state => state.diary.isError;
const getDiaryProducts = state => state.diary.products;
const getDiaryMessage = state => state.diary.message;

export const diarySelectors = {
  getCurrentDate,
  getIsLoading,
  getIsSuccess,
  getIsError,
  getDiaryProducts,
  getDiaryMessage,
};
