

 async function fetchItem(url){
    let re = await fetch(url);
    re= await re.json();
    console.log(re);
    return re;
}

function debounce(fun,d){
    let id= '';
    return function(...arg){
        
        return new Promise(re=>{
            clearTimeout(id);

          id=  setTimeout(async() => {
          let r = await  fun.call(this, ...arg);
          re(r)
            }, d);
        })
    }
}

let fetchItemWithDebounce = debounce(fetchItem, 1000)
export default fetchItemWithDebounce