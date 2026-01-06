function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: "#0f172a",
      color: "#e5e7eb"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        React app deployed with Dokploy 🚀
      </h1>
      <p style={{ fontSize: "1.1rem", maxWidth: 480, textAlign: "center", lineHeight: 1.6 }}>
        This is a simple dummy React app. Dokploy pulls the code, builds the image using a Dockerfile,
        and serves the static files through nginx.
      </p>
    </div>
  );
}

export default App;
