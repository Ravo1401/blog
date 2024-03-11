import { Item } from "@/components/blog";
import { useGetId } from "@/hooks/useGetId";

export default function FindBlog({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = useGetId(id);
  if (!blog) {
    return <div>404 </div>; 
  }
  return (
    <div>
        <Item blog={blog} showContent />
    </div>
  )
}
