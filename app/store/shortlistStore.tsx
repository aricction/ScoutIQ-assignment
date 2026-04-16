import { createContext , useContext , useEffect , useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShortlistContext = createContext<any>(null);

export const ShortlistProvider = ({children}: any)=>{
  const [shortlist, setShortList] = useState<any[]>([]);
  
  useEffect(()=> {
    loadShortList();
  }, []);

  const loadShortList = async()=> {
    const data = await AsyncStorage.getItem("shortlist");
    if(data) setShortList(JSON.parse(data));
  };

  const saveShortlist = async(list: any[])=>{
    setShortList(list);
    await AsyncStorage.setItem("shortlist", JSON.stringify(list));
  };

  const toggleShortlist = (athlete: any)=> {
    const exists = shortlist.find((a)=> a.id === athlete.id);

    let updated;

    if(exists) {
        updated = shortlist.filter((a)=> a.id !== athlete.id);
    } else {
        updated = [...shortlist , athlete]; //add
    }
    saveShortlist(updated);
  }


  return (
    <ShortlistContext.Provider value={{shortlist , toggleShortlist }}>
        {children}
    </ShortlistContext.Provider>
  )
}

export const useShortlist = ()=> useContext(ShortlistContext)