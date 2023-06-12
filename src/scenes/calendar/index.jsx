import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { Box, List, Stack, useTheme, Typography, styled } from "@mui/material";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please Enter a new title for your dates");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    console.log(title);

    if (title) {
      calendarApi.addEvent({
        id: new Date().getMilliseconds().toString(),
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${clickInfo.event.title}`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <Stack
      direction={"row"}
      m={1}
      p={1}
      gap={7}
      marginBottom={"12px"}
      sx={{ boxSizing: "border-box" }}
    >
      <Box flex={"1 1 5%"}>
        <Stack p={1} gap={4} sx={{ background: colors.primary[400] }}>
          <Typography variant="h8">Events</Typography>
          {currentEvents.map(({ id, startStr, title }) => {
            return (
              <Box
                borderRadius={"1rem"}
                key={id}
                sx={{
                  backgroundColor: colors.blueAccent[800],
                  height: "6rem",
                  width: "20rem",
                }}
                p={2}
              >
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h6">
                  {formatDate(startStr, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          editable={true}
          height={700}
          selectable={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          weekends={true}
          eventsSet={(events) => {
            setCurrentEvents(events);
          }}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2023-05-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2023-05-28",
            },
          ]}
        />
      </CalendarWrapper>
    </Stack>
  );
};

export default Calendar;

const CalendarWrapper = styled("div")({
  flex: "60%",
});
