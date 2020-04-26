import { CatamaranInfo } from './catamaran-info.component';
import { SailingShipInfo } from './sailing-ship-info.component';

export class Boat {
  constructor(
    public ownerType?: string,
    public boatType?: string,
    public additionalInfo?: CatamaranInfo | SailingShipInfo
  ) { }
}
