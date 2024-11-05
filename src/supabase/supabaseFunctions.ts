import { supabase } from "./supabase";

export const fetchCategory = async (tableName: string) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('UX, Ul, Bug, Enhancement, Feature, All'); 

        if (error) {
            throw new Error(error.message);
        }
        
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
