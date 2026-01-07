import mongooseConnect from "@/lib/mongooseConnect";
import Blog from "@/models/Blog";

export async function GET(req) {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongooseConnect();

    const {searchParams} = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 6;
    const skip = (page - 1) * limit;

    console.log(
      `Fetching published blogs - page: ${page}, limit: ${limit}, skip: ${skip}`
    );
    const blogs = await Blog.find({status: {$in: ["published", "publish"]}})
      .select("title slug images description createdAt _id")
      .sort({createdAt: -1})
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Blog.countDocuments({
      status: {$in: ["published", "publish"]}
    });

    console.log(`Blogs fetched: ${blogs.length}, total: ${total}`);
    return new Response(
      JSON.stringify({
        blogs,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }),
      {
        status: 200,
        headers: {"Content-Type": "application/json"}
      }
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response(
      JSON.stringify({message: "خطا در دریافت بلاگ‌ها", error: error.message}),
      {
        status: 500,
        headers: {"Content-Type": "application/json"}
      }
    );
  }
}
