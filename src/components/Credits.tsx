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
        <a href="https://www.linkedin.com/in/samuel-bouchet-077080262/">
          Samuel Bouchet
        </a>{" "}
        -{" "}
        <a href="https://www.linkedin.com/in/alexandre-delaunay-12744a107/">
          Alexandre Delaunay
        </a>{" "}
        - <a href="https://www.linkedin.com/in/adelinehamon/">Adeline Hamon</a>
      </p>
    </div>
  );
};

export default Credits;
