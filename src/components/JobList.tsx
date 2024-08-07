import { useActiveId } from '../lib/hooks';
import { JobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: Props) {
  const activeId = useActiveId();

  return (
    <ul className="job-list">
      {isLoading ? (
        <Spinner />
      ) : (
        jobItems.map((item) => (
          <JobListItem
            key={item.id}
            jobItem={item}
            isActive={item.id === activeId}
          />
        ))
      )}
    </ul>
  );
}

export default JobList;
