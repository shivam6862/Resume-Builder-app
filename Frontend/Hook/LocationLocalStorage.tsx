export const useLocationLocalStorage = () => {
  const updatePersonalDetails = (data: any) => {
    localStorage.setItem("PersonalDetails", JSON.stringify(data));
  };
  const fetchPersonalDetails = (): any => {
    const data = localStorage.getItem("PersonalDetails");
    const response = JSON.parse(data!);
    return response;
  };
  const removePersonalDetails = () => {
    localStorage.removeItem("PersonalDetails");
  };
  return {
    updatePersonalDetails,
    fetchPersonalDetails,
    removePersonalDetails,
  };
};
