export class invoiceItemModel {
  constructor(
    public id: number,
    public invoice_id: string,
    public invoice_number: string,
    public product_id: number,
    public quantity: number,
    public unit_price: number,
  ) {}
}
