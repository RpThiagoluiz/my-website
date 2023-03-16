export const downloadFile = (
  fileForDownload: string,
  fileDownloadName: string,
) => {
  // using Java Script method to get PDF file
  fetch(fileForDownload).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      const alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = fileDownloadName;
      alink.click();
    });
  });
};
