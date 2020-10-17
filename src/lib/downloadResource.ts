const forceDownload = (blobUrl: string, filename: string): void => {
  const a = document.createElement('a');
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const downloadResource = async (url: string, filename: string): Promise<void> => {
  if (!filename) {
    filename = (url.split('\\').pop() as string).split('/').pop() as string;
  }
  try {
    const response = await fetch(url, {
      headers: new Headers({
        Origin: location.origin,
      }),
      mode: 'cors',
    });
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    forceDownload(blobUrl, filename);
  } catch (err) {
    console.error(err);
  }
};

export default downloadResource;
