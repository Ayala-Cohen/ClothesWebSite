using BL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ClothesWebSite.Controllers
{
    [RoutePrefix("api/buying")]
    public class PerfomingShopingsController : ApiController
    {
        [Route("perfomingShoping/{id}")]
        [HttpPost]
        public void perfomingShoping(int id, [FromBody] List<ShopingBasket> l_products)
        {
            PerformingShopingBL.PerformShoping(id,l_products);
        }


    }
}
