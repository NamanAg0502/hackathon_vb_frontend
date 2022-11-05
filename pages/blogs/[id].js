import { useRouter } from 'next/router';
import { BlogHero } from '../../components/BlogHero';
import data from '../../BlogData.json';
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = data.blogData[id - 1];
  console.log(blog);
  return (
    <>
      {/* <div className="bg-gray-50 min-h-screen ">
        <h1 className="center text-center text-4xl m-8">{blog.title}</h1>
        <div className="">

        </div>
      </div> */}
      <BlogHero blogData={blog} />
      <div className="text-xl whitespace-pre-wrap px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-30 text-black">
        {blog.content}
      </div>
    </>
  );
};

export default Post;
