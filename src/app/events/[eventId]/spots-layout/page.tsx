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

async function reserveSpotsAction(formData: FormData) {
  "use server";
  const spots = formData.getAll("spots");

  const cookieStore = cookies();

  if (spots.length == 0) {
    return { error: "Selecione ao menos um assento." };
  }

  cookieStore.set("spots", JSON.stringify(spots));
  const { event, spots } = await getEvent(parseInt(params.eventId));

  return <p>{params.eventId}</p>;
}
