import { Blog, blogFactice } from "@/utils/constants";

export function useGetId(id: Blog["id"]) {
  return blogFactice.find((blog) => blog.id == id);

}
