import { supabase } from "./supabase";

export const fetchCategory = async (tableName: string) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('Category'); 

        if (error) {
            throw new Error(error.message);
        }
        console.log(data, 'sve iz category')

        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


export async function fetchFeedbacksWithAllRelations() {
    try {
        let { data: feedbacks, error } = await supabase
            .from('Feedbacks')
            .select(`
                *,
                Comments (*),
                Category (*)
            `);

        if (error) {
            console.error("Error fetching feedbacks with all relations:", error);
            return null;
        }

        console.log("Feedbacks with related data:", feedbacks);
        return feedbacks;
    } catch (error) {
        console.error("Unexpected error:", error);
        return null;
    }
}

export async function fetchFeedbackById(id) {
    try {
        let { data: feedback, error } = await supabase
            .from('Feedbacks')
            .select(`
                *,
                Comments (*),
                Category (*)
            `)
            .eq('id', id) 
            .single(); 

        if (error) {
            console.error("Error fetching feedback by ID:", error);
            return null;
        }

        console.log("Feedback with related data by ID:", feedback);
        return feedback;
    } catch (error) {
        console.error("Unexpected error:", error);
        return null;
    }
}

export async function signIn(credentials) {
    try {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password
          })


        if (error) {
            console.error("Error fetching feedback by ID:", error);
            return null;
        }

        let { data: users, userError } = await supabase
         .from('Users')
         .select("user_image, full_name, user_name")
         .eq('id', data.user.id )
         .single()

         if(userError){
            console.log('UserError', userError.message)
         }
        return {data, users};
    } catch (error) {
        console.error("Unexpected error:", error);
        return null;
    }
}
export async function postComment(commentData) {
    try {
        const { data, error } = await supabase
            .from('Comments')
            .insert([
                {
                    user: commentData.user,
                    user_name: commentData.user_name,
                    user_image: commentData.user_image,
                    user_comment: commentData.user_comment
                }
            ])
            .select();

        if (error) {
            throw new Error(error.message);
        }
        console.log('POSLATI PODACI', data)
        return data;
    } catch (error) {
        console.error("Unexpected error:", error);
        return null;
    }
}

