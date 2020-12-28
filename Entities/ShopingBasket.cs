using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ShopingBasket
    {
        public int cloth_id;
        public string cloth_name;
        public int amount;
        public double price_for_one;
        public double final_price;

        public ShopingBasket(int cloth_id,string cloth_name,int amount,double price_for_one,double final_price)
        {
            this.cloth_id = cloth_id;
            this.cloth_name = cloth_name;
            this.amount = amount;
            this.price_for_one = price_for_one;
            this.final_price = final_price;
        }
    }
}
