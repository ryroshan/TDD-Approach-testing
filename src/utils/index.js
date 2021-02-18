export const findAttr = (component, attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}