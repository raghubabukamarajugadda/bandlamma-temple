import { DiyaDivider } from "./Ornaments";

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      {image && (
        <div className="page-hero__img">
          <img src={image} alt="" aria-hidden="true" />
        </div>
      )}
      <div className="shell page-hero__content">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-title">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        <DiyaDivider />
      </div>
    </section>
  );
}
