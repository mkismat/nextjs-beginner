import { useState } from "react";
function CommentsPage() {
  const [comments, setComments] = useState([{ id: "", text: "" }]);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchComments = async () => {
    const response = await fetch("/api/comments", {
      method: "GET",
    });
    const data = await response.json();
    if (!data.length) {
      setIsLoading(false);
    }
    setIsLoading(true);
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId: number) => {
    if (!commentId) {
      throw Error;
    }
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit comment</button>
      </div>
      <hr />
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        if (isLoading) {
          return (
            <div key={comment.id}>
              {comment.id}. {comment.text}
              <button onClick={() => deleteComment(parseInt(comment.id))}>
                Delete
              </button>
            </div>
          );
        }
      })}
    </>
  );
}

export default CommentsPage;
