import { useState } from "react";


const CommentForm = ({
    handleSubmit,
    submitLabel,
    initialText = '',
    hasCancelButton = false,
    handleCancel,
    }) => {
    const [text, setText] = useState(initialText);
    const isTextAreaDisabled = text.length === 0;
    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
    return (
        <form onSubmit={onSubmit}>
            <textarea
                className="comment-form-text-area"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button className="comment-form-button" disabled={isTextAreaDisabled}>
                    {submitLabel}
                </button>
                {hasCancelButton && (
                    <button type="button" className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}
                    >
                     Cancel 
                    </button>
                )}
        </form>
    )
   };
   
export default CommentForm;