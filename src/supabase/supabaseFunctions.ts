import { toast } from "react-toastify";
import { supabase } from "./supabase";
import {Credentials, SignInResponse } from "../components/types/types";

export const fetchCategory = async (tableName: string) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('Category'); 

        if (error) {
            throw new Error(error.message);
        }

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
        return feedbacks;
    } catch (error) {
        console.error("Unexpected error:", error);
        return null;
    }
}
export async function fetchFeedbackById(id:string) {
    try {
        let { data: feedback, error } = await supabase
            .from('Feedbacks')
            .select(`
                *,
                Comments (
                    *,
                    Answers!Answers_comment_id_fkey (
                        *,
                        comment_user_answer (
                            id,
                            user_image,
                            user_name,
                            user_comment,
                            user
                        )
                    )
                ),
                Category (*)
            `)
            .eq('id', id)
            .single();

        if (error) {
            console.error("Error fetching feedback by ID:", error);
            return null;
        }

        return feedback;
    } catch (error) {
        return null;
    }
}

export async function signIn(credentials: Credentials): Promise<SignInResponse | null> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) {
      console.error("Error during sign-in:", error.message);
      return null;
    }

    const { data: users, error: userError } = await supabase
      .from("Users")
      .select("user_image, full_name, user_name")
      .eq("id", data.user.id)
      .single();

    if (userError) {
      console.error("Error fetching user details:", userError.message);
    }

    return { data, users };
  } catch (error) {
    console.error("Unexpected error:", (error as Error).message);
    return null;
  }
}

export async function postComment(commentData:any) {
    const randomId = Math.floor(Math.random() * 100000);
    try {
        const { data, error } = await supabase
            .from('Comments')
            .insert([
                {
                    id:randomId ,
                    user: commentData.user,
                    user_name: commentData.user_name,
                    user_image: commentData.user_image,
                    user_comment: commentData.user_comment,
                    feedback_id: commentData.feedback_id
                }
            ])
            .select();

        if (error) {
            throw new Error(error.message);
        }
        return data;
    } catch (error) {
        toast.error("Unexpected error");
        return null;
    }
}

export async function postFeedback(feedback:any) {
    const randomId = Math.floor(Math.random() * 100000);
    try {
        const { data, error } = await supabase
            .from('Feedbacks')
            .insert([
                {
                    id: randomId,
                    title: feedback.title,
                    category_id: feedback.category_id,
                    feedback: feedback.feedback,
                    type: feedback.type,
                },
            ])
            .select('*, Comments(*), Category(*)');

        if (error) {
            throw new Error(error.message);
        }

        return data;
    } catch (error) {
        toast.error("Unexpected error");
        return null;
    }
}

export async function sortFeedBacksByCategory(categoryId = "All", upvotesOrComments = "") {
    try {
        let query = supabase
            .from("Feedbacks")
            .select(`*, Comments(*), Category(*)`);

        if (categoryId !== "All" && categoryId !== "") {
            query = query.eq("category_id", categoryId);
        }

        const { data, error } = await query;

        if (error) {
            throw new Error(error.message);
        }

        let sortedData = data || [];

        if (upvotesOrComments) {
            switch (upvotesOrComments) {
                case "Most Upvotes":
                    sortedData = sortedData.sort((a, b) => b.upvotes - a.upvotes);
                    break;
                case "Least Upvotes":
                    sortedData = sortedData.sort((a, b) => a.upvotes - b.upvotes);
                    break;
                case "Most Comments":
                    sortedData = sortedData.sort((a, b) => b.Comments.length - a.Comments.length);
                    break;
                case "Least Comments":
                    sortedData = sortedData.sort((a, b) => a.Comments.length - b.Comments.length);
                    break;
                default:
                    break;
            }
        }

        return sortedData;
    } catch (error) {
        toast.error("Unexpected error");
        return null;
    }
}

export async function addCommentAndAnswer(commentData:any, answerText:any) {
    const randomId = Math.floor(Math.random() * 100000);
    try {
      const { data: newComment, error: commentError } = await supabase
        .from('Comments')
        .insert({
          id: randomId,
          user: commentData.full_name,
          user_name: commentData.user_name,
          user_image: commentData.user_image,
        })
        .select()
        .single();
  
      if (commentError) {
        throw new Error('Greška pri dodavanju komentara: ' + commentError.message);
      }
  
      const commentId = newComment.id;
  
      const { data: newAnswer, error: answerError } = await supabase
        .from('Answers')
        .insert([
          {
            comment_id: 1,
            comment_user_answer: commentId,
            answer: answerText,
          },
        ]);
  
      if (answerError) {
        throw new Error('Error');
      }
      console.log(newAnswer)
  
      return { comment_user_answer: newComment, answer: answerText };
    } catch (error) {
      throw error;
    }
  }
  