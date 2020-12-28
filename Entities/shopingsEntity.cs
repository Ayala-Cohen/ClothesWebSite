using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace Entities
{
    public class shopingsEntity
    {
        public int id { get; set; }
        public Nullable<int> client_id { get; set; }
        public Nullable<System.DateTime> shoping_date { get; set; }
        public Nullable<decimal> sum_for_paying { get; set; }

        //המרת קנייה בודדת מסוג המסד לסוג המחלקה
        public static shopingsEntity ConvertDBToEntity(shopingsTBL s)
        {
            return new shopingsEntity() { id = s.id, client_id=s.client_id,shoping_date=s.shoping_date,sum_for_paying=Convert.ToDecimal(s.sum_for_paying)};
        }

        //המרת קנייה בודדת מסוג המחלקה לסוג המסד
        public static shopingsTBL ConvertEntityToDB(shopingsEntity s)
        {
            return new shopingsTBL() { id = s.id, client_id = s.client_id, shoping_date = s.shoping_date, sum_for_paying = Convert.ToDecimal(s.sum_for_paying) };
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<shopingsEntity> ConvertListDBToListEntity(List<shopingsTBL> l)
        {
            List<shopingsEntity> l_shopings = new List<shopingsEntity>();
            foreach (var item in l)
            {
                l_shopings.Add(ConvertDBToEntity(item));
            }
            return l_shopings;
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<shopingsTBL> ConvertListEntityToListDB(List<shopingsEntity> l)
        {
            List<shopingsTBL> l_shopings = new List<shopingsTBL>();
            foreach (var item in l)
            {
                l_shopings.Add(ConvertEntityToDB(item));
            }
            return l_shopings;
        }
    }
}
