import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import styles from "../components/Post.module.css";
import { Comment } from "../components/Comment";
import { Avatar } from "../components/Avatar";
import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(["post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as':mm'h'", {
    locale: ptBr,
    // addSuffix: true,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWidthoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWidthoutDeleteOne);
  }
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return <a href="#">{line.content}</a>;
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          value={newCommentText}
          placeholder="deixe um comentario"
          onInvalid={handleNewCommentInvalid}
          required={true}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} deleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}
export { Post };
