const DOMHandler = ((viewSelector) => {
  const element = document.querySelector(viewSelector);
  const load = (module) => {
    element.innerHTML = module;
    module.addListeners();
  };
  return {
    load,
  };
})("#root");

export default DOMHandler;