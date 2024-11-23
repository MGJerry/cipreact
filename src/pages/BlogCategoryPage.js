import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubToBlog from "../components/SubToBlog";
import BigPost from "../components/BigPost";
import SmallPost from "../components/SmallPost";
import { Box, Typography, Grid2, Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BlogCategoryPage = () => {
  const { category } = useParams();
  const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const categoryPosts = blogPosts.filter((post) => post.category === normalizedCategory);
  const [highlightedPost, ...otherPosts] = categoryPosts; // First post as highlighted

  const categoryColors = {
    Business: "linear-gradient(90deg, #5363DF, #13BAFC)",
    Market: "linear-gradient(90deg, #42A5F5, #478ED1)",
    Startup: "linear-gradient(90deg, #5363DF, #13BAFC)",
    Technology: "linear-gradient(90deg, #4CAF50, #2E7D32)",
  };

  return (
    <Box>
      <Header />
      <Box sx={{ paddingX: "64px", paddingY: "48px" }}>
        <Box sx={{ paddingBottom: "24px", textAlign: "center" }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ justifyContent: "center", display: "inline-flex" }}
          >
            <Link href="/" underline="hover" color="inherit">
              <HomeIcon fontSize="small" />
            </Link>
            <Link href="/blog" underline="hover" color="inherit">
              Blog
            </Link>
            <Typography color="text.primary">{normalizedCategory}</Typography>
          </Breadcrumbs>
        </Box>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            background: categoryColors[normalizedCategory],
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            marginBottom: "32px",
          }}
        >
          {normalizedCategory}
        </Typography>

        <Box sx={{ marginBottom: "48px" }}>
          {highlightedPost && <BigPost post={highlightedPost} />}
        </Box>

        <Box>
          <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "24px", fontWeight: "bold" }}>
            Other Posts in {normalizedCategory}
          </Typography>
          <Grid2
            container
            spacing={4}
            justifyContent="center" // Center the grid
            sx={{ maxWidth: "1200px", margin: "0 auto" }} // Restrict width and center it
          >
            {otherPosts.length > 0 ? (
              otherPosts.map((post) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                  <SmallPost
                    category={post.category}
                    date={post.date}
                    thumbnail={process.env.PUBLIC_URL + post.thumbnail}
                    title={post.title}
                    description={post.description}
                    link={`/blog/post?id=${post.id}`}
                  />
                </Grid2>
              ))
            ) : (
              <Typography variant="body1" sx={{ textAlign: "center", color: "#888", width: "100%" }}>
                No additional posts found in this category.
              </Typography>
            )}
          </Grid2>
        </Box>
      </Box>
      <SubToBlog />
      <Footer />
    </Box>
  );
};

export default BlogCategoryPage;
