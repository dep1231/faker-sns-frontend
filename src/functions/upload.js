import axios from "axios";

export const uploadImages = async (formData, path) => {
  const UPLOAD_API_URL = process.env.REACT_APP_API_URL_UPLOAD;
  try {
    const { data } = await axios.post(
      UPLOAD_API_URL + `uploadImage`,
      formData,
      {
        headers: {
          // Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
