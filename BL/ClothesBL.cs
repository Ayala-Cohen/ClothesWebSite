using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Entities;

namespace BL
{
    public class ClothesBL
    {
        //פונקצית שליפת רשימת הבגדים
        public static List<clothesEntity> GetList()
        {
            return clothesEntity.ConvertListDBToListEntity(connectDB.entity.clothesTBL.ToList());
        }
        //פונקצית שליפת בגד על פי קוד
        public static clothesEntity GetOneById(int id)
        {
            return clothesEntity.ConvertDBToEntity(connectDB.entity.clothesTBL.FirstOrDefault(x => x.id == id));
        }
        //פונקצית הוספת בגד לרשימה
        public static List<clothesEntity> AddClothing(clothesEntity c)
        {
            int n= c.img.LastIndexOf(@"\");
            string img_file = c.img.Substring(n+1);
            //if (!System.IO.File.Exists(@"D:\Ayala\web\Angular\Final_project\ClothesWebSite\ClothesWebSite\Images\" + img_file))
                //System.IO.File.Copy(img_file, @"D:\Ayala\web\Angular\Final_project\ClothesWebSite\ClothesWebSite\Images");
            c.img = img_file;
            connectDB.entity.clothesTBL.Add(clothesEntity.ConvertEntityToDB(c));
            connectDB.entity.SaveChanges();
            return clothesEntity.ConvertListDBToListEntity(connectDB.entity.clothesTBL.ToList());
        }
        //פונקצית עדכון בגד מהרשימה
        public static List<clothesEntity> EditClothing(clothesEntity c)
        {
            clothesTBL cloth=connectDB.entity.clothesTBL.First(x => x.id == c.id);
            cloth.img = c.img;
            cloth.color = c.color;
            cloth.name = c.name;
            cloth.price = c.price;
            cloth.size = c.size;
            cloth.category_id = c.category_id;
            cloth.amount = c.amount;
            connectDB.entity.SaveChanges();
            return clothesEntity.ConvertListDBToListEntity(connectDB.entity.clothesTBL.ToList());
        }
        //פונקצית הסרת בגד מהרשימה
        public static List<clothesEntity> DeleteClothing(int id)
        {
            clothesTBL c = connectDB.entity.clothesTBL.FirstOrDefault(x => x.id == id);
            if(c.shopingDetailsTBL.Count()==0 && c.shopingDetailsTBL.Select(x=>x.shopingsTBL).Count()==0)
                connectDB.entity.clothesTBL.Remove(c);
            connectDB.entity.SaveChanges();
            return clothesEntity.ConvertListDBToListEntity(connectDB.entity.clothesTBL.ToList());
        }
        //פונקציה לשליפת בגדים על פי קטגוריה מסוימת
        public static List<clothesEntity> GetListByCategory(int id)
        {
            List<clothesEntity> l = clothesEntity.ConvertListDBToListEntity(connectDB.entity.clothesTBL.Where(x => x.category_id == id).ToList());
            return l;
        }
    }
}
