import { supabase } from "./supabase"

export const fetchCategory = async (tableName) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*') 

        if (error) {
            throw new Error(error.message)
        }

        return data
    } catch (error) {
        console.error("Error fetching data:", error)
        return null
    }
}


