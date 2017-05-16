using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAngularBackPacker.Models
{
    [JsonObject(MemberSerialization.OptOut)]
    public class LoungeViewModel
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }

        [JsonIgnore]
        public int ViewCount { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}
