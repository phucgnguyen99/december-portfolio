export default function Section({ id, title, children }) {
  return (
    <section id={id}>
      {title && <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>{title}</h2>}
      {children}
    </section>
  );
}
