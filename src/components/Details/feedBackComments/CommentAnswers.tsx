const CommentAnswers = ({answer}) => {
    console.log(answer, 'answer koji se treba displejati')
    return(
        <div className="w-full mt-6 rounded-lg">
         {answer} <span>odgovor</span>
        </div>
    )
}

export default CommentAnswers;