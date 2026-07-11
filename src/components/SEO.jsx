import { Helmet } from "react-helmet-async";

const DEFAULT_IMAGE =
  "https://parth-event-services.vercel.app/preview.png";

const DEFAULT_KEYWORDS =
  "Event Services Lucknow, Wedding Decoration Lucknow, Balloon Decoration, Flower Decoration, Paan Counter, Fruit Counter";

function SEO({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  keywords = DEFAULT_KEYWORDS,
}) {
  return (
    <Helmet>

      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="Parth Event Services" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={url} />

      <meta property="og:image" content={image} />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

    </Helmet>
  );
}

export default SEO;