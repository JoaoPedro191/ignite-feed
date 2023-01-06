import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../components/Comment.module.css";
import { Avatar } from "../components/Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    deleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JoaoPedro191.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Diego Fernandes</strong>
              <time title="11 de maio as 8:30" dateTime="2022-05-11 08:13:30">
                Cerca de 1 hora atras
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
export { Comment };
