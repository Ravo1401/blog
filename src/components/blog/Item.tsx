import { Blog } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
type itemProps = {
  blog: Blog;
  showImage?: boolean;
  showContent?: boolean;
};

export function Item({ blog, showContent, showImage }: itemProps) {
  return (
    <Link href={`blog/${blog.id}`}>
      <div className="w-full  mx-auto p-5 max-w-[800px] bg-white-500 my-2">
        <p className="text-center">
          <span className="font-bold">ID</span>: {blog.id}
        </p>
        <p className="text-center">{blog.title}</p>
        {showContent && (
          <div>
            <p className="text-center">{blog.content}</p>
            <Link href={`blog/${blog.id}/image`} className="text-center my-2 text-white underline font-bold">
              Show image
            </Link>
          </div>
        )}
        {showImage && (
          <Image src={blog.img} alt="bllogImage" height={400} width={500} />
        )}
      </div>
    </Link>
  );
}
