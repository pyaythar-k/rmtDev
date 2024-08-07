export default function Footer({ jobItemsCount }: { jobItemsCount: number }) {
  return (
    <footer className="footer">
      <small>
        <p>
          © Copyright by{' '}
          <a href="" target="_blank">
            Practical Project by IK.
          </a>
          . Built with 🍎.
        </p>
      </small>

      <p>
        <span className="u-bold">{jobItemsCount}</span> total jobs available
      </p>
    </footer>
  );
}
