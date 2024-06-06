type CreditsProps = {
  className: string;
};

const Credits = ({ className }: CreditsProps) => {
  return (
    <div className={className}>
      <p className="text-xs text-gray-700">
        Made with ❤️ by{" "}
        <a className="font-bold" href="https://lonestone.io">
          Lonestone
        </a>{" "}
        - Hackathon 24
        <br />
        Samuel Bouchet - Alexandre Delaunay - Adeline Hamon
      </p>
    </div>
  );
};

export default Credits;
