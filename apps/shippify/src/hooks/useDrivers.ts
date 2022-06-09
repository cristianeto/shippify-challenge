import { IDriver } from "@core/interfaces";
import { useEffect, useState } from "react";
import { getDriversByCompanyId } from "../services/driver";

const useDrivers = () => { 
    const [drivers, setDrivers] = useState<IDriver[]>([])
    
    const populateDrivers = async () => {
        const res = await getDriversByCompanyId("1"); 
        setDrivers(res.data)
      };
    
    useEffect(() => {
        populateDrivers();        
    }, []);
      
      return { drivers };
}

export default useDrivers;