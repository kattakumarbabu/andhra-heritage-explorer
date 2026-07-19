import { motion } from "framer-motion";

function CategoryCard({ category }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        minHeight: "180px",
        background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
        borderRadius: "22px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 16px 40px rgba(2,6,23,0.28)",
        border: "1px solid rgba(148,163,184,0.18)",
        padding: "1.25rem",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>{category.icon}</div>
      <h3 style={{ margin: 0, color: "#f8fafc", fontWeight: "700" }}>{category.name}</h3>
    </motion.div>
  );
}

export default CategoryCard;