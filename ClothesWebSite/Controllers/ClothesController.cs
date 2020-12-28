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
    [RoutePrefix("api/clothes")]
    public class ClothesController : ApiController
    {
        //פונקצית שליפת רשימת הבגדים
        [Route("GetList")]
        [HttpGet]
        public  List<clothesEntity> GetList()
        {
            return ClothesBL.GetList();
        }
        //פונקצית שליפת בגד על פי קוד
        [Route("GetOneById/{id}")]
        [HttpGet]
        public  clothesEntity GetOneById(int id)
        {
            return ClothesBL.GetOneById(id);
        }
        //פונקצית הוספת בגד לרשימה
        [Route("AddClothing")]
        [HttpPut]
        public  List<clothesEntity> AddClothing([FromBody] clothesEntity c)
        {
            return ClothesBL.AddClothing(c);
        }
        //פונקצית עדכון בגד מהרשימה
        [Route("EditClothing")]
        [HttpPost]
        public  List<clothesEntity> EditClothing([FromBody] clothesEntity c)
        {
            return ClothesBL.EditClothing(c);
        }
        //פונקצית הסרת בגד מהרשימה
        [Route("DeleteClothing/{id}")]
        [HttpDelete]
        public  List<clothesEntity> DeleteClothing(int id)
        {
            return ClothesBL.DeleteClothing(id);
        }
        [Route("GetListByCategory/{id}")]
        [HttpGet]
        //פונקציה לשליפת בגדים על פי קטגוריה מסוימת
        public  List<clothesEntity> GetListByCategory(int id)
        {
            return ClothesBL.GetListByCategory(id);
        }
    }
}
