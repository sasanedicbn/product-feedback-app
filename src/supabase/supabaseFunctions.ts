import { supabase } from "./supabase"

export const fetchCategory = async (tableName:string) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*') 

        if (error) {
            throw new Error(error.message)
        }
        console.log(data)
        return data
        
    } catch (error) {
        console.error("Error fetching data:", error)
        return null
    }
}


