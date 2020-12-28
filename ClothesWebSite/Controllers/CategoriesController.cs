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
    [RoutePrefix("api/categories")]
    public class CategoriesController : ApiController
    {
        //פונקציה להחזרת רשימת הקטגוריות
        [Route("GetList")]
        [HttpGet]
        public  List<categoryEntity> GetList()
        {
            return CategoriesBL.GetList();
        }


        //פונקציה לשליפת קטגוריה על פי קוד
        [Route("getOneById/{id}")]
        [HttpGet]
        public  categoryEntity getOneById(int id)
        {
            return CategoriesBL.getOneById(id);
        }

        //פונקציה להוספת קטגוריה
        [Route("AddToList")]
        [HttpPut]
        public  List<categoryEntity> AddToList([FromBody] categoryEntity c)
        {
            return CategoriesBL.AddToList(c);
        }

        //פונקציה לעדכון קטגוריה
        [Route("EditCategory")]
        [HttpPost]
        public  List<categoryEntity> EditCategory([FromBody] categoryEntity c)
        {
            return CategoriesBL.EditCategory(c);
        }


        //פונקציה להסרת קטגוריה מהרשימה
        [Route("DeleteFromList/{id}")]
        [HttpDelete]
        public  List<categoryEntity> DeleteFromList(int id)
        {
            return CategoriesBL.DeleteFromList(id);

        }
    }
}
