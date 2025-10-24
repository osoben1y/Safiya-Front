import { memo } from 'react';
import { useEvent } from '../../hooks/useEvent';
import EventView from '../../components/Event-view';

const Events = () => {
  const { getEvents } = useEvent()
  const { data, isLoading, error } = getEvents

  if (isLoading) {
    return <div className="Events">Loading...</div>
  }

  if (error) {
    return <div className="Events">Error loading events</div>
  }

  return (
    <div className="Events">
      <EventView data={data || []} />
    </div>
  );
};

export default memo(Events);