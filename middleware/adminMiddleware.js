const adminMiddleware = (req, res, next) => {
  // Assuming user roles are part of the token payload
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Access denied" });
  next();
};

export default adminMiddleware;
