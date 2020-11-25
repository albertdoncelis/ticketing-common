import {Subjects} from "./subjects";

export interface TicketCreatedEvent {
  readonly subject: Subjects.TicketCreated

  readonly data: {
    id: string,
    version: number,
    title: string,
    price: number,
    userId: string,
    orderId?: string
  }
}