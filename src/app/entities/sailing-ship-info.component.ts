export class SailingShipInfo {
  constructor(
    public length?: number,
    public width?: number,
    public draft?: number,
    public foil?: boolean,
    public crew?: boolean,
    public annex?: boolean
  ) { }
}
