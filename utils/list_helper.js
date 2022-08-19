const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce(function (sum, blog) {
    return sum + blog.likes;
  }, 0);
};

const favoriteBlog = (blogs) => {
  const newBlogs = [];
  blogs.map((blog) =>
    newBlogs.push({
      title: blog.title,
      author: blog.author,
      likes: blog.likes,
    })
  );

  const max = newBlogs.reduce(function (prev, current) {
    return prev.likes > current.likes ? prev : current;
  });
  return max;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
