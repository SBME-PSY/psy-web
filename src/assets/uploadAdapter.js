function uploadAdapter(loader) {
  return {
    upload: () => {
      return new Promise((resolve, reject) => {
        loader.file.then((file) => {
          const FR = new FileReader();
          FR.addEventListener('load', function (e) {
            resolve({
              default: e.target.result,
            });
          });

          FR.readAsDataURL(file);
        });
      });
    },
  };
}
function uploadPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}
export { uploadPlugin };
