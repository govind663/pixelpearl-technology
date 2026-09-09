import { Link } from "react-router-dom";
import pixelpearlLogo from "../asset/images/Pixelpearl_Brand_Logo.jpeg";

export default function Logo({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className="flex items-center shrink-0"
      aria-label="Pixelpearl Technologies — Home"
    >
      <img
        src={pixelpearlLogo}
        alt="Pixelpearl Technologies"
        className={
          compact
            ? "h-10 w-auto object-contain"
            : "h-12 sm:h-14 w-auto object-contain"
        }
      />
    </Link>
  );
}