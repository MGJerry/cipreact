import React, { useEffect, useRef } from "react";
import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnjoyPostContact from "../components/EnjoyPostContact";
import SmallPost from "../components/SmallPost";
import {
  Box,
  Typography,
  Grid2,
  Button,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BlogPostPage = ({ postId = 1 }) => {
  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0];
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== postId)
    .slice(0, 2);

  const sectionRefs = useRef([]);

  // Scroll to a specific section when clicking on the TOC
  const handleScrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Initialize refs for sections
  useEffect(() => {
    sectionRefs.current = post.content.map(() => React.createRef().current);
  }, [post]);

  return (
    <Box>
      {/* Header */}
      <Header />

      <Box sx={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <Link href="/" color="inherit" sx={{ display: "flex", alignItems: "center" }}>
              <HomeIcon fontSize="small" sx={{ marginRight: "4px" }} />
              Home
            </Link>
            <Link href="/blog" color="inherit">
              Blog
            </Link>
          </Breadcrumbs>

          {/* Category Button */}
          <Button
            variant="contained"
            href={`/blog/${post.category}`}
            sx={{
              background: "linear-gradient(90deg, #5363DF 0%, #13BAFC 100%)",
              color: "#fff",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "4px 16px",
              fontSize: "14px",
              marginBottom: "16px",
            }}
          >
            {post.category}
          </Button>

          {/* Title and Description */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#000", marginBottom: "16px", textAlign: "center" }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#757575", marginBottom: "32px", textAlign: "center" }}
          >
            {post.description}
          </Typography>

          {/* Thumbnail */}
          <Box sx={{ marginBottom: "32px" }}>
            <img
              src={process.env.PUBLIC_URL + post.thumbnail}
              alt={post.title}
              style={{ width: "100%", maxWidth: "800px", borderRadius: "8px" }}
            />
          </Box>
        </Box>

        {/* Blog Content and Quick Navigation */}
        <Grid2 container spacing={4}>
          {/* Quick Navigation Tab */}
          <Grid2 size={{ xs: 12, md: 3 }} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                position: { md: "sticky", xs: "static" },
                top: { md: "80px" },
                padding: "16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                marginBottom: { xs: "16px", md: "0" },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", marginBottom: "16px", color: "#5363DF" }}
              >
                In this article
              </Typography>
              <List disablePadding>
                {post.content.map((section, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => handleScrollToSection(index)}
                      sx={{
                        padding: "4px 8px",
                        color: "#5363DF",
                        "&:hover": { backgroundColor: "#e3f2fd" },
                      }}
                    >
                      <ListItemText
                        primary={section.heading}
                        primaryTypographyProps={{ fontSize: "14px" }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid2>

          {/* Blog Content */}
          <Grid2 size={{ xs: 12, md: 9 }} order={{ xs: 2, md: 1 }}>
            {post.content.map((section, index) => (
              <Box
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                sx={{ marginBottom: "32px" }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
                  {section.heading}
                </Typography>
                {section.text.split("\n\n").map((paragraph, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{ color: "#616161", marginBottom: "16px" }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            ))}
          </Grid2>
        </Grid2>
      </Box>

      {/* Related Posts */}
      <Box sx={{ padding: "32px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "32px" }}>
          Related Post
        </Typography>
        <Grid2
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {relatedPosts.map((related) => (
            <Grid2 size={{ xs: 12, md: 6 }} key={related.id}>
              <SmallPost
                category={related.category}
                date={related.date}
                thumbnail={process.env.PUBLIC_URL + related.thumbnail}
                title={related.title}
                description={related.description}
                link={`/blog/post?id=${related.id}`}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* Call-to-Action */}
      <EnjoyPostContact />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default BlogPostPage;
