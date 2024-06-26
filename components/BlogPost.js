import Link from "next/link";
import Image from "next/image";

const BlogPost = ({ title, image, summary, slug }) => {
  return (
    <aside>
      <Image src={image} alt={`Image of ${title}`} width="300" height="180" />
      <Link href={`/blog/${slug}`}>
        
          <h3>{title}</h3>
        
      </Link>
      <p>{summary}</p>
    </aside>
  );
};

export default BlogPost;
