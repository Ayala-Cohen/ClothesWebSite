using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Entities;

namespace BL
{
    public class CategoriesBL
    {
        
        //פונקציה להחזרת רשימת הקטגוריות
        public  static List<categoryEntity> GetList()
        {
            return categoryEntity.ConvertListDBToListEntity(connectDB.entity.categoryTBL.ToList());
        }


        //פונקציה לשליפת קטגוריה על פי קוד
        public static categoryEntity getOneById(int id)
        {
            return categoryEntity.ConvertDBToEntity(connectDB.entity.categoryTBL.First(x => x.id == id));
        }
        
        //פונקציה להוספת קטגוריה
        public static List<categoryEntity> AddToList( categoryEntity c)
        {
            //DB? הוא לא מצליח לעדכן ב try and catch למה כשיש  
            try
            {
                connectDB.entity.categoryTBL.Add(categoryEntity.ConvertEntityToDB(c));
                connectDB.entity.SaveChanges();
            }
            catch { }
            return categoryEntity.ConvertListDBToListEntity(connectDB.entity.categoryTBL.ToList());
        }

        //פונקציה לעדכון קטגוריה
        public static List<categoryEntity> EditCategory(categoryEntity c)
        {
            try
            {
                categoryTBL categoryForUpdate = connectDB.entity.categoryTBL.FirstOrDefault(x => x.id == c.id);
                categoryForUpdate.name = c.name;
                connectDB.entity.SaveChanges();
            }
            catch { }
            return categoryEntity.ConvertListDBToListEntity(connectDB.entity.categoryTBL.ToList());
        }


        //פונקציה להסרת קטגוריה מהרשימה
        public static List<categoryEntity> DeleteFromList(int id)
        {
            try
            {   
                categoryTBL categoryForDeleting = connectDB.entity.categoryTBL.FirstOrDefault(x => x.id == id);
                if (categoryForDeleting.clothesTBL.Count() == 0)//מחיקה רק אם לקטגוריה אין בגדים משויכים
                {
                    connectDB.entity.categoryTBL.Remove(categoryForDeleting);
                    connectDB.entity.SaveChanges();
                }
            }
            catch { }
            return categoryEntity.ConvertListDBToListEntity(connectDB.entity.categoryTBL.ToList());
        }
    }
}
