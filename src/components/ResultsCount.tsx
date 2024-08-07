export default function ResultsCount({
  jobItemsCount,
}: {
  jobItemsCount: number;
}) {
  return (
    <p className="count">
      <span className="u-bold">{jobItemsCount}</span> results
    </p>
  );
}
