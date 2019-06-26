export interface Sortable {
  data: any
  length: number
  compare(leftIdx: number, rightIdx: number): boolean
  swap(leftIdx: number, rightIdx: number): void
  print(): void
}

export default class Sorter {
  constructor(public collection: Sortable) {}

  public sort(): void {
    const { length } = this.collection
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }

  public print(): void {
    this.collection.print()
  }
}
