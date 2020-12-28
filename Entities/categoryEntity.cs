using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace Entities
{
    public class categoryEntity
    {
        public int id { get; set; }
        public string name { get; set; }

        //המרת קטגוריה בודדת מסוג המסד לסוג המחלקה
        public static categoryEntity ConvertDBToEntity(categoryTBL c)
        {
            return new categoryEntity() { id = c.id, name = c.name };
        }

        //המרת קטגוריה בודדת מסוג המחלקה לסוג המסד
        public static categoryTBL  ConvertEntityToDB(categoryEntity c)
        {
            return new categoryTBL() { id = c.id, name = c.name };
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<categoryEntity> ConvertListDBToListEntity(List<categoryTBL> l)
        {
            List<categoryEntity> l_categories = new List<categoryEntity>();
            foreach (var item in l)
            {
                l_categories.Add(ConvertDBToEntity(item));
            }
            return l_categories;
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<categoryTBL> ConvertListEntityToListDB(List< categoryEntity> l)
        {
            List<categoryTBL> l_categories = new List<categoryTBL>();
            foreach (var item in l)
            {
                l_categories.Add(ConvertEntityToDB(item));
            }
            return l_categories;
        }
    }
}
