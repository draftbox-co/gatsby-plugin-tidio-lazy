  
export const onInitialClientRender = (_, pluginOptions) => {
  const tidioId = pluginOptions.tidioId;
  const delayLoad = pluginOptions.optimize;

  const source = `//code.tidio.co/${tidioId}.js`

  const tidioScript = document.createElement("script");

  tidioScript.src = source;

  tidioScript.defer = true;

  const appendScript = () => {
    document.body.appendChild(tidioScript);
  };

  if (!delayLoad) {
    appendScript();
  } else {
    setTimeout(() => {
      window["requestIdleCallback"]
        ? window.requestIdleCallback(appendScript)
        : appendScript();
      console.log("added script");
    }, 3000);
  }
};