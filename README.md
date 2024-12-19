**Product Feedback App**  

The Product Feedback App is designed to collect and manage user feedback interactively. It provides a platform for viewing, commenting, and voting on ideas and suggestions.

## **Technologies and Libraries Used**
- **React**
- **Supabase**
- **Material-UI**
- **React-Hook-Form**
- **React Toastify**

## **Features**
- **User Login** – Sign in to access all app features.  
- **Feedback Sorting** – Sort feedback by:  
  - Most comments  
  - Most upvotes  
  - Category (All, Featured, etc.)  
- **Add Feedback** – Submit your own feedback.  
- **Comments and Replies** – Add comments and reply to existing ones.  
- **Post Upvotes** – Upvote posts to support great ideas.  

## **Environment Variables**
To ensure security, sensitive information such as API keys and database credentials is stored in a `.env` file. These values are **not** included in the repository and must be configured manually.

### Example `.env` file:
```txt
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
