import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchPosts, setSelectedPost, clearSelectedPost } from "../features/posts/postsSlice";  // подправь путь если нужно

import "../styles/Home.css"

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);
  const { list: posts, status, error, selectedId } = useSelector((state) => state.posts);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const selectedPost = posts.find(p => p.id === selectedId);

  console.log("Текущая тема:", theme);

  return (
    <main className="home container">
      <h2>Главная страница</h2>
      <p>Добро пожаловать на главную страницу моего React Redux приложения!</p>

      {/* Секция 1: LIST / DETAIL постов */}
      <section className="posts-section">
        <h3>Посты (загрузка с задержкой 2 сек)</h3>

        {status === 'loading' && <p className="loading">Загружаем посты...</p>}
        {status === 'failed' && <p className="error">Ошибка: {error}</p>}

        {status === 'succeeded' && (
          <div className="posts-list">
            {posts.map(post => (
              <div
                key={post.id}
                className={`post-card ${selectedId === post.id ? 'active' : ''}`}
                onClick={() =>
                  selectedId === post.id
                    ? dispatch(clearSelectedPost())
                    : dispatch(setSelectedPost(post.id))
                }
              >
                <h4>{post.title}</h4>
                {selectedId === post.id && (
                  <div className="post-detail">
                    <p>{post.body}</p>
                    <small>User ID: {post.userId}</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Можно добавить ещё 1-2 секции позже */}
      <section>
        <h3>Другие контенты (пока заглушка)</h3>
        <p>Здесь скоро будут пользователи или альбомы из JSON</p>
      </section>
    </main>
  );
};

export default Home;