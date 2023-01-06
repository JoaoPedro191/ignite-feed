import { Header } from "./components/Header";
import { Sidebar } from "../src/components/Sidebar";
import { Post } from "../src/components/Post";
import styles from "../src/App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JoaoPedro191.png",
      name: "Joao Pedro",
      role: "delopement",
    },
    content: [
      {
        type: "paragraph",
        content: " Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lucasmoreiradev.png",
      name: "Lucas Moreira",
      role: "delopement",
    },
    content: [
      {
        type: "paragraph",
        content: " Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-11 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
export { App };
