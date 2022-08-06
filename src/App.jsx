import './App.css';
import BlogContact from './blogComponents/BlogContact';
import BlogCreatePost from './blogComponents/BlogCreatePost';
import BlogFooter from './blogComponents/BlogFooter';
import BlogHeader from './blogComponents/BlogHeader';
import BlogMainContent from './blogComponents/BlogMainContent';

function App() {
  return (
    <div className="App">
      <BlogHeader />
      <BlogMainContent />
      <BlogCreatePost />
      <BlogFooter />
    </div>
  );
}

export default App;
