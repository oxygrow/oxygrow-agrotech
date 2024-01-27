import Link from "next/link";

const PrimaryBtn = ({ text, path }) => {
  return (
    <Link href={path}>
      <button
        type="button"
        className="px-8 py-3 text-sm font-medium text-center text-white rounded-full h-14 bg-dark-green hover:bg-light-green focus:outline-none focus:ring-4 focus:ring-green-300 me-2"
      >
        {text}
      </button>
    </Link>
  );
};

export default PrimaryBtn;
