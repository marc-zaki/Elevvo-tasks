const { useState, useMemo } = React;

const blogPostsData = [
  {
    id: 1,
    title: "Exploring React Hooks",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    description: "Description",
    date: "2024-04-01",
    category: "Tech",
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Description",
    date: "2024-03-15",
    category: "Travel",
  },
  {
    id: 3,
    title: "Delicious Vegan Recipes",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    description: "Description",
    date: "2024-02-20",
    category: "Food",
  },
  {
    id: 4,
    title: "Advanced JavaScript Patterns",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80",
    description: "Description",
    date: "2024-04-10",
    category: "Tech",
  },
  {
    id: 5,
    title: "Backpacking Through Europe",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80",
    description: "Description",
    date: "2024-03-05",
    category: "Travel",
  },
  {
    id: 6,
    title: "Baking the Perfect Bread",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    description: "Description",
    date: "2024-01-30",
    category: "Food",
  },
];

function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">Elevvo Task 4</h1>
      <p>A full react project</p>
    </header>
  );
}

function BlogPostCard({ post }) {
  return (
    <div className="blog-post-card">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="content">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2">{post.description}</p>
        <div className="text-sm text-gray-500 flex justify-between meta">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span className="font-medium">{post.category}</span>
        </div>
      </div>
    </div>
  );
}

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      <button
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={selectedCategory === cat ? "selected" : ""}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <button
        className="border rounded"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "selected" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="border rounded"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

function BlogHomepage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const categories = useMemo(() => {
    const cats = new Set(blogPostsData.map((post) => post.category));
    return Array.from(cats);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  // Reset to page 1 if filters change and current page is out of range
  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="blog-homepage-container" style={{minHeight: '80vh', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <div className="mb-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <input
          type="text"
          placeholder="Search posts by title..."
          className="border rounded px-3 py-2 w-full sm:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div style={{flexGrow: 1}}>
        {paginatedPosts.length === 0 ? (
          <p className="text-center text-gray-600">No posts found.</p>
        ) : (
          <div className="posts-grid">
            {paginatedPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BlogHomepage />);
