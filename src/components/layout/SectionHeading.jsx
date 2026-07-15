export default function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return (
    <div className="section-heading mb-4 text-center">
      {eyebrow && (
        <p className="section-eyebrow mb-2">
          {eyebrow}
        </p>
      )}

      <h2>{title}</h2>

      {description && (
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          {description}
        </p>
      )}
    </div>
  );
}