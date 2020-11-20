import {Subjects} from "./subjects";

export interface TicketUpdatedEvent {
  readonly subject: Subjects.TicketUpdated

  readonly data: {
    id: string,
    title: string,
    price: number,
    userId: string
  }
}