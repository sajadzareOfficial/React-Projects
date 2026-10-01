namespace WebApplication1.Model
{
    public class UserModel
    {
        
        public string Name { get; set; }
        public string Family { get; set; }
        public int ID { get; set; }



        public UserModel(string name, string family, int id)
        {
            Name = name;
            Family = family;
            ID = id;
        }

        public UserModel(JsonContent  quer)
        {
            
            //Name = quer.name;
            
            //var data = quer.Keys;
            //foreach (var item in data)
            //{
            //    switch (item)
            //    {
            //        //var item = item ? item == "Name" : null;
            //        case "Name":
            //            Name = item;
            //            break;
            //        case "Family":
            //            Family = item;
            //            break;
            //        case "Id":
            //            ID = Convert.ToInt32(item) is int ? Convert.ToInt32(item) : 0;
            //            break;
            //    }
            //}
        }

    }
}
