import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotalCostExcludingDiscount (): number{
        return  Array.from(this._items).reduce((sum, current) => sum+current.price, 0)
    }
    getTotalCostIncludingDiscount (discount: number): number{
        return this.getTotalCostExcludingDiscount() * ((100 - discount) / 100)
    }
    getDeleteItem(id: number ): void{
        Array.from(this._items).forEach((item, index) => {
            if (id === item.id) {
                this._items.splice(index, 1);
            }
          });
        }
    }
