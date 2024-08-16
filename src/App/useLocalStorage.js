import { useState, useEffect } from "react";

function useLocalStorage(itemName,initState){
    
    const [item,setItem] = useState(initState);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(()=>{ 
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if(!localStorageItem){
                    localStorage.setItem(itemName,JSON.stringify([]));
                    parsedItem=initState;
                  }else{
                    parsedItem=JSON.parse(localStorageItem);
                    setItem(parsedItem)
                  }
                  
                setLoading(false); 
            }catch(error){
                setLoading(false); 
                setError(true);
            } 
        }, 3000);
    },[])
    
    function updateItem(newItem){
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {item,updateItem,loading,error};
  }

export { useLocalStorage };