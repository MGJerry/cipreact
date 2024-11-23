import React from "react";
import { Box, Typography, Button } from "@mui/material";

const BigPost = ({ post }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        padding: "24px",
      }}
    >
      {/* Thumbnail */}
      <Box sx={{ flex: 1 }}>
        <img
          src={post.thumbnail}
          alt={post.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Box>
      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="caption"
          sx={{ color: "#5363DF", fontWeight: "bold", marginBottom: "8px" }}
        >
          {post.category} • {post.date}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
          {post.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "16px", color: "#555" }}>
          {post.description}
        </Typography>
        <Button href={`/blog/post?id=${post.id}`} variant="contained" color="primary">
          Read Article →
        </Button>
      </Box>
    </Box>
  );
};

export default BigPost;
