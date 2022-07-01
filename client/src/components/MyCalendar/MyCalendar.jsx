import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

const buttonText = {
  month: 'month'
}

const events = [
  { // this object will be "parsed" into an Event Object
    title: 'The Title', // a property!
    start: '2022-06-29', // a property!
    end: '2018-06-29' // a property! ** see important note below about 'end' **
  }
]

const createPost = (info) => {
  console.log(info)
}

const MyCalendar = () => {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ,interactionPlugin ]}
      titleFormat={
        {
          year: 'numeric',
          month: 'short'
        }
      }
      headerToolbar={
        {
          start: 'title',
          center: '',
          end: 'prev,next'
        }
      }
      initialView="dayGridMonth"
      // buttonText={buttonText}
      footerToolbar={
        {
          start: 'dayGridMonth',
          center: '',
          end: 'prevYear,nextYear',
        }
      }
      selectable='true'
      select={createPost}
      events={events}
      
    />
  );
}

export default MyCalendar;
