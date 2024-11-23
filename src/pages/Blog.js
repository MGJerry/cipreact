import React, { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubToBlog from "../components/SubToBlog";
import BigPost from "../components/BigPost";
import SmallPost from "../components/SmallPost";
import {
  Box,
  Typography,
  Grid2,
  Button,
  Link as MuiLink,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import BusinessIcon from "@mui/icons-material/Business";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BlogPage = () => {
  const [postsToShow, setPostsToShow] = useState(4); // Initially show 4 posts
  const allPosts = blogPosts; // All blog posts
  const highlightedPost = allPosts[0]; // First post as the big post
  const popularPosts = blogPosts.slice(1, 5); // First 4 popular posts
  const latestPosts = blogPosts.slice(1); // Exclude the highlighted post

  const handleShowMorePosts = () => {
    setPostsToShow((prev) => prev + 4); // Show 4 more posts on each click
  };

  const categoryColors = {
    Business: "#5363DF",
    Market: "#42A5F5",
    Startup: "#5363DF",
    Technology: "#4CAF50",
  };

  return (
    <Box>
      <Header />

      {/* Main Content */}
      <Box sx={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Big Post with Popular Posts */}
        <Grid2 container spacing={2}>
          {/* Big Post */}
          <Grid2 size={{ xs: 12, md: 8 }}>
            <BigPost post={highlightedPost} />
          </Grid2>

          {/* Popular Posts */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box sx={{ padding: "16px", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "16px",
                  color: "#5363DF", // Keep consistent with SmallPost/BigPost
                }}
              >
                Popular Posts
              </Typography>
              {popularPosts.map((post) => (
                <MuiLink
                  href={`/blog/post?id=${post.id}`}
                  underline="none"
                  key={post.id}
                  sx={{
                    display: "block",
                    marginBottom: "16px",
                    borderBottom: "1px solid #e0e0e0",
                    paddingBottom: "8px",
                    "&:hover": { textDecoration: "none", backgroundColor: "#f9f9f9" },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: categoryColors[post.category], fontWeight: "bold" }}
                  >
                    {post.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#757575", marginBottom: "4px" }}
                  >
                    {post.date}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold", color: "#000" }}>
                    {post.title}
                  </Typography>
                </MuiLink>
              ))}
            </Box>
          </Grid2>
        </Grid2>

        {/* Latest Posts */}
        <Box sx={{ marginTop: "32px" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "16px", textAlign: "left" }}
          >
            Latest Post
          </Typography>

          {/* Category Buttons */}
          <Box sx={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #5363DF, #13BAFC)",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "4px 16px",
              }}
            >
              All Category
            </Button>
            <Button
              href="/blog/startup"
              variant="contained"
              startIcon={<WorkIcon />}
              sx={{
                background: "#4CAF50",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "4px 16px",
              }}
            >
              Startup
            </Button>
            <Button
              href="/blog/market"
              variant="contained"
              startIcon={<StackedLineChartIcon />}
              sx={{
                background: "#42A5F5",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "4px 16px",
              }}
            >
              Market
            </Button>
            <Button
              href="/blog/business"
              variant="contained"
              startIcon={<BusinessIcon />}
              sx={{
                background: "#5363DF",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "4px 16px",
              }}
            >
              Business
            </Button>
            <Button
              href="/blog/technology"
              variant="contained"
              startIcon={<WebAssetIcon />}
              sx={{
                background: "#2E7D32",
                color: "#fff",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "4px 16px",
              }}
            >
              Technology
            </Button>
          </Box>

          {/* Small Posts */}
          <Grid2 container spacing={2}>
            {latestPosts.slice(0, postsToShow).map((post) => (
              <Grid2 size={{ xs: 12, md: 6 }} key={post.id} sx={{ display: "flex", justifyContent: "center" }}>
                <SmallPost
                  category={post.category}
                  date={post.date}
                  thumbnail={process.env.PUBLIC_URL + post.thumbnail}
                  title={post.title}
                  description={post.description}
                  link={`/blog/post?id=${post.id}`}
                />
              </Grid2>
            ))}
          </Grid2>

          {/* Show More Button */}
          {postsToShow < latestPosts.length && (
            <Box sx={{ textAlign: "center", marginTop: "16px" }}>
              <Button
                variant="contained"
                startIcon={<ExpandMoreIcon />}
                onClick={handleShowMorePosts}
                sx={{
                  background: "linear-gradient(to bottom, #683FEA, #DFBDF1)",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: "32px",
                  padding: "8px 24px",
                }}
              >
                More Post
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* Subscribe Section */}
      <SubToBlog />

      <Footer />
    </Box>
  );
};

export default BlogPage;
