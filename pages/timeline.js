import React from 'react';
import { TimelinePage } from 'containers/Timeline';
import { TimeLineProvider } from '../containers/Timeline/actions/TimelineContext';

export default function timeline() {
  return (
    <div>
      <TimeLineProvider>
        <TimelinePage />
      </TimeLineProvider>
    </div>
  );
}
