### **1️⃣ State Management**

const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 6;
```

* `currentPage` → tracks which page the user is currently viewing.
* `postsPerPage` → defines **how many posts** you want to show per page.

---

### **2️⃣ Calculate Slice Indexes**

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
```

* `indexOfLastPost`: the index of the **last post** on the current page.

  * Example: Page 1 → `1 * 6 = 6` → last post is at index 5 (0-based index).
  * Page 2 → `2 * 6 = 12` → last post is at index 11.
* `indexOfFirstPost`: the index of the **first post** on the current page.

  * Page 1 → `6 - 6 = 0` → first post index 0.
  * Page 2 → `12 - 6 = 6` → first post index 6.

---

### **3️⃣ Slice the Posts Array**

const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
```

* `.slice(start, end)` returns a **sub-array** from `start` to `end - 1`.
* So for Page 1 → `allPosts.slice(0, 6)` → posts 0 to 5.
* For Page 2 → `allPosts.slice(6, 12)` → posts 6 to 11.

This ensures **only the posts for the current page** are displayed.

---

### **4️⃣ Total Pages**

const totalPages = Math.ceil(allPosts.length / postsPerPage);
```

* Calculates how many **pagination buttons** we need.
* Example: 20 posts, 6 per page → `Math.ceil(20/6) = 4` pages.

---

### **5️⃣ Pagination Buttons**

{Array.from({ length: totalPages }, (_, i) => (
  <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
    {i + 1}
  </button>
))}
```

* `Array.from({ length: totalPages })` → creates an array `[0,1,2,...]` for the pages.
* `setCurrentPage(i + 1)` → updates the state, which **re-renders** the posts for that page.

---

### ✅ **Summary of Logic**

1. Track the **current page** using `currentPage` state.
2. Calculate which posts to show using **slice** (`indexOfFirstPost` → `indexOfLastPost`).
3. Dynamically generate **pagination buttons** using `totalPages`.
4. Clicking a button updates `currentPage`, which re-slices the posts and updates the UI.