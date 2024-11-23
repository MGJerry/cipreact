import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

const SmallPost = ({ category, date, thumbnail, title, description, link }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        maxWidth: 350,
      }}
    >
      <CardMedia
        component="img"
        image={thumbnail}
        alt={title}
        sx={{
          height: 200,
        }}
      />
      <CardContent sx={{ padding: "16px" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", marginBottom: "8px" }}>
          <Typography variant="caption" sx={{ fontWeight: "bold", color: "#1976d2" }}>
            {category}
          </Typography>
          <Typography variant="caption" sx={{ color: "#757575" }}>
            • {date}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            fontSize: "18px",
            lineHeight: "1.5",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2, // Limit to 2 lines
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#616161",
            marginBottom: "16px",
            fontSize: "14px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3, // Limit to 3 lines
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
        <Button
          href={link}
          size="small"
          variant="text"
          sx={{ color: "#1976d2", fontWeight: "bold", textTransform: "none", fontSize: "14px" }}
        >
          Read Article →
        </Button>
      </CardContent>
    </Card>
  );
};

SmallPost.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SmallPost;
