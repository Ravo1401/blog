import { blogFactice } from "@/utils/constants";
import { Item } from "@/components/blog";
export default function page() {
  return (
    <div>
        {blogFactice.map((blog) => <Item key={blog.id} blog={blog} />)}
    </div>
  )
  
}
