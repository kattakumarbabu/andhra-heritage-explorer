function CategoryCard({ category }) {
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        background: "#ffffff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(37,99,235,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(0,0,0,0.12)";
      }}
    >
      <div
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        {category.icon}
      </div>

      <h3
        style={{
          margin: 0,
          color: "#1E293B",
          fontWeight: "600",
        }}
      >
        {category.name}
      </h3>
    </div>
  );
}

export default CategoryCard;