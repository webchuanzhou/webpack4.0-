export const setLocalStorage = (name,val) => {
    localStorage.setItem(name,val);
}
export const getLocalStorage = ((name)=>{
    var names =  localStorage.getItem(name);
    return  names;
})