import { blogFactice } from "@/utils/constants";
import { Item } from "./Item";

export function Menu() {
  return (
    <div className="w-[300px] bg-white-600 overflow-y-auto" style={{ height: "calc(100vh - 100px)" }}>
      {blogFactice.map((blog) => (
        <Item key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
