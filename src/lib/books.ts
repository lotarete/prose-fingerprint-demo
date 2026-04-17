import booksData from "../../public/data/books.json"
import { Book } from "./types"

const books: Book[] = booksData.books as Book[]

export function getAllBooks(): Book[] {
  return books
}

export function getBooksByGenre(genre: string): Book[] {
  return books.filter(b => b.genre === genre)
}

export function getAnchorBook(genre: string): Book | undefined {
  return books.find(b => b.genre === genre && b.isAnchor)
}

export function getBookById(id: string): Book | undefined {
  return books.find(b => b.id === id)
}
