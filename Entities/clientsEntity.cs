using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace Entities
{
    public class clientsEntity
    {
        public int id { get; set; }
        public string name { get; set; }
        public string client_password { get; set; }
        public Nullable<long> credit_card { get; set; }
        public Nullable<int> client_kind { get; set; }
        public string user_name { get; set; }

        //המרת לקוח בודד מסוג המסד לסוג המחלקה
        public static clientsEntity ConvertDBToEntity(clientsTBL c)
        {
            return new clientsEntity() { id = c.id, name = c.name,client_password=c.client_password,credit_card=c.credit_card ,client_kind=c.client_kind,user_name=c.user_name};
        }

        //המרת לקוח בודד מסוג המחלקה לסוג המסד
        public static clientsTBL ConvertEntityToDB(clientsEntity c)
        {
            return new clientsTBL() { id = c.id, name = c.name, client_password = c.client_password, credit_card = c.credit_card ,client_kind=c.client_kind,user_name=c.user_name};
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<clientsEntity> ConvertListDBToListEntity(List<clientsTBL> l)
        {
            List<clientsEntity> l_clients = new List<clientsEntity>();
            foreach (var item in l)
            {
                l_clients.Add(ConvertDBToEntity(item));
            }
            return l_clients;
        }

        //המרת רשימה מסוג המסד לרשימה מסוג המחלקה
        public static List<clientsTBL> ConvertListEntityToListDB(List<clientsEntity> l)
        {
            List<clientsTBL> l_clients = new List<clientsTBL>();
            foreach (var item in l)
            {
                l_clients.Add(ConvertEntityToDB(item));
            }
            return l_clients;
        }
    }
}
