using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Entities;

namespace BL
{
    //לבדוק אולי צריך להיות במחלקה אחרת - אחת משתי הטבלאות של הקניות
    public class PerformingShopingBL
    {
        public static void PerformShoping(int client_id, List<ShopingBasket> ItemsInBasket)
        {
            int sh_id;
            foreach (var item in ItemsInBasket)
            {
                //הוספת רשומה בטבלת קניות
                connectDB.entity.shopingsTBL.Add(new shopingsTBL { client_id = client_id, shoping_date = DateTime.Today, sum_for_paying = Convert.ToDecimal(item.final_price) });
                //הוספת רשומה בטבלת פרטי קניה
                connectDB.entity.SaveChanges();
                //שליפת קוד הרשומה האחרונה בטבלת קניות
                sh_id = connectDB.entity.shopingsTBL.Select(x=>x.id).AsEnumerable().Last();
                connectDB.entity.shopingDetailsTBL.Add(new shopingDetailsTBL { shoping_id = sh_id, cloth_id = item.cloth_id, amount = item.amount });
                //עדכון המלאי של המוצר
                connectDB.entity.clothesTBL.FirstOrDefault(x => x.id == item.cloth_id).amount -= item.amount;
            }
            connectDB.entity.SaveChanges();
        }
    }
}
