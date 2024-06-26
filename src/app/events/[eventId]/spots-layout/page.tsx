import { EventModel, SpotModel } from "../../../../../models";

async function getEvent(
  eventId: number
): Promise<{ event: EventModel; spots: SpotModel[] }> {
  const response = await fetch(`http://localhost:8000/events/${eventId}`, {
    cache: "no-store",
    next: {
      tags: [`events/${eventId}`],
    },
  });
  return response.json();
}

  cookieStore.set("spots", JSON.stringify(spots));
  const { event, spots } = await getEvent(parseInt(params.eventId));

  return <p>{params.eventId}</p>;
}
