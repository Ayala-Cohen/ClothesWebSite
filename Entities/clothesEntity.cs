using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace Entities
{
    public class clothesEntity
    {

        public int id { get; set; }
        public string name { get; set; }
        public Nullable<int> category_id { get; set; }
        public string category_name { get; set; }
        public Nullable<decimal> price { get; set; }
        public string img { get; set; }
        public string color { get; set; }
        public Nullable<int> size { get; set; }
        public Nullable<int> amount { get; set; }

        //המרת בגד בודד מסוג המסד לסוג המחלקה
        public static clothesEntity ConvertDBToEntity(clothesTBL c)
        {
            return new clothesEntity() { id = c.id, name = c.name, category_id=c.category_id,price=c.price,img=c.img,color=c.color,size=c.size,amount=c.amount ,category_name=c.categoryTBL.name};
        }

        //המרת בגד בודד מסוג המחלקה לסוג המסד
        public static clothesTBL ConvertEntityToDB(clothesEntity c)
        {
            return new clothesTBL() { id = c.id, name = c.name, category_id = c.category_id, price = c.price, img = c.img, color = c.color, size = c.size, amount = c.amount };
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<clothesEntity> ConvertListDBToListEntity(List<clothesTBL> l)
        {
            List<clothesEntity> l_clothes = new List<clothesEntity>();
            foreach (var item in l)
            {
                l_clothes.Add(ConvertDBToEntity(item));
            }
            return l_clothes;
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<clothesTBL> ConvertListEntityToListDB(List<clothesEntity> l)
        {
            List<clothesTBL> l_clothes = new List<clothesTBL>();
            foreach (var item in l)
            {
                l_clothes.Add(ConvertEntityToDB(item));
            }
            return l_clothes;
        }
    }
}
