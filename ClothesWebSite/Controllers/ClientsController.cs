using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using Entities;

namespace ClothesWebSite.Controllers
{
    [RoutePrefix("api/clients")]
    public class ClientsController : ApiController
    {
        //פונקצית הוספת לקוח 
        [Route("AddClient")]
        [HttpPut]
        public  bool AddClient([FromBody] clientsEntity c)
        {
            return ClientsBL.AddClient(c);
        }
        //פונקציה לבדיקה האם הלקוח שמור במערכת
        //מהי שיטת הגישה??


        [Route("CheckIfExist")]
        [HttpPost]
        public  bool CheckIfExist([FromBody] clientsEntity c)
        {
            return ClientsBL.CheckIfExist(c);
        }


        [Route("GetOneByUserName/{UserName}")]
        [HttpGet]
        public clientsEntity GetOneByUserName(string UserName)
        {
            return ClientsBL.GetOneByUserName(UserName);
        }

    }
}
