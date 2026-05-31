import { useEffect, useMemo, useState } from 'react'
import Post from '../post/Post'
import CustomNavbar from '../navbar/navbar'
import { getPostData, getUsersData } from '../../servicces/services'
import type { APIPostProps, FilteredPosts, PostProps } from '../../interface/interface'
import './feed.css'

function App() {
  const [posts, setPosts] = useState<APIPostProps[]>([]);
  const [users, setUsers] = useState([]);
  const [feedPosts, setFeedPosts] = useState<PostProps[]>([]);
  const [savedPosts, setSavedPosts] = useState<PostProps[]>([]);
  const [likedPosts, setLikedPosts] = useState<PostProps[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const toModel = () => {
    if (posts.length > 0) {
      setFeedPosts(
        posts.map((post) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body,
            imageUrl: `https://picsum.photos/id/${post.id}/300/200`,
            liked: false,
            saved: false,
          };
        })
      );
    }
  };

  useEffect(() => {
    if (posts.length > 0) {
      toModel();
    }
  }, [posts]);

  async function fetchData() {
    const p = await getPostData();
    const u = await getUsersData();
    console.log('posts: ', p);
    console.log('users: ', u);
    setPosts(p.posts);
    setUsers(u.users);
  }

  const handleToggleLike = (id: number) => {
    setFeedPosts((prev) => {
      debugger
      const updatedPosts = prev.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            liked: !post.liked,
          };
        }
        return post;
      });

      setLikedPosts(updatedPosts.filter((post) => post.liked));
      return updatedPosts;
    });
  };

  const handleToggleSave = (id: number) => {
    setFeedPosts((prev) => {
      debugger
      const updatedPosts = prev.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            saved: !post.saved,
          };
        }
        return post;
      });

      setSavedPosts(updatedPosts.filter((post) => post.saved));
      return updatedPosts;
    });
  };

  const handleDelete = (id: number) => {
    console.log('deleting post with id: ', id);
    setFeedPosts((prev) => prev.filter((post) => post.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setFilterPosts = (filter: string) => {
    setSelectedFilter(filter);
  }

  const displayPosts = useMemo(() => {
    if (selectedFilter === "liked") {
      return feedPosts.filter((post) => post.liked);
    }

    if (selectedFilter === "bookmarked") {
      return feedPosts.filter((post) => post.saved);
    }

    return feedPosts;
  }, [selectedFilter, feedPosts]);

  return (
    <div className="">
      <CustomNavbar onFilterChange={setFilterPosts} />
      <div className="feed-container">
        {displayPosts.map((post: PostProps) => (
          <div className="post" key={`${post.id}`}>
            <Post
              {...post}
              onToggleLike={handleToggleLike}
              onToggleSave={handleToggleSave}
              onDelete={handleDelete} />
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App