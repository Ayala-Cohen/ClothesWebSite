using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using Entities;

namespace BL
{
    public class ClientsBL
    {
        //פונקצית הוספת לקוח 
        public static bool AddClient(clientsEntity c)
        {
            if (CheckIfExist(c) == false)//במקרה שהלקוח לא קיים ואכן מדובר בלקוח חדש
            {
                connectDB.entity.clientsTBL.Add(clientsEntity.ConvertEntityToDB(c));
                connectDB.entity.SaveChanges();
                var l_clients = connectDB.entity.clientsTBL;

                return true;
            }
            return false;
        }

        //פונקציה לבדיקה האם הלקוח שמור במערכת
        public static bool CheckIfExist(clientsEntity c)
        {
            if (connectDB.entity.clientsTBL.FirstOrDefault(x => x.user_name == c.user_name && x.client_password == c.client_password) == null)
                return false;
            return true;
        }

        //פונקציה לשליפת רשימת הלקוחות
        public static List<clientsEntity> GetList()
        {
            return clientsEntity.ConvertListDBToListEntity(connectDB.entity.clientsTBL.ToList());
        }

        public static clientsEntity GetOneByUserName(string user_name)
        {
            return clientsEntity.ConvertDBToEntity(connectDB.entity.clientsTBL.FirstOrDefault(x => x.user_name == user_name));
        }
    }
}
