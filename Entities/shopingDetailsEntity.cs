using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace Entities
{
    public class shopingDetailsEntity
    {
        public int id { get; set; }
        public Nullable<int> shoping_id { get; set; }
        public Nullable<int> cloth_id { get; set; }
        public Nullable<int> amount { get; set; }



        //המרת קנייה בודדת מסוג המסד לסוג המחלקה
        public static shopingDetailsEntity ConvertDBToEntity(shopingDetailsTBL s)
        {
            return new shopingDetailsEntity() { id = s.id,shoping_id = s.shoping_id, cloth_id=s.cloth_id,amount=s.amount};
        }

        //המרת קנייה בודדת מסוג המחלקה לסוג המסד
        public static shopingDetailsTBL ConvertEntityToDB(shopingDetailsEntity s)
        {
            return new shopingDetailsTBL() { id = s.id, shoping_id = s.shoping_id, cloth_id = s.cloth_id, amount = s.amount };
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<shopingDetailsEntity> ConvertListDBToListEntity(List<shopingDetailsTBL> l)
        {
            List<shopingDetailsEntity> l_shopings = new List<shopingDetailsEntity>();
            foreach (var item in l)
            {
                l_shopings.Add(ConvertDBToEntity(item));
            }
            return l_shopings;
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<shopingDetailsTBL> ConvertListEntityToListDB(List<shopingDetailsEntity> l)
        {
            List<shopingDetailsTBL> l_shopings = new List<shopingDetailsTBL>();
            foreach (var item in l)
            {
                l_shopings.Add(ConvertEntityToDB(item));
            }
            return l_shopings;
        }
    }
}
